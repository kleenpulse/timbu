import { z } from "zod";
import validator from "validator";

export const CheckoutSchema = z
	.object({
		first_name: z.string().min(2, { message: "First name is required" }),
		last_name: z.string().min(2, { message: "Last name is required" }),
		email: z.string().email({ message: "Email is required" }),
		phone: z.string().refine((val) => validator.isMobilePhone(val), {
			message: "Phone number is required",
		}),
		address: z.string().min(1, { message: "Address is required" }),
		is_credit_card: z
			.boolean({ message: "Credit card is required" })
			.default(true),
		is_transfer: z.boolean().default(false),
		card_number: z
			.string()
			.regex(/^\d{16}$/, "Card number must be 16 digits")
			.optional(),
		cvv: z
			.string()
			.regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits")
			.optional(),
		expiry_date: z
			.string()
			.regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must be in MM/YY format")
			.optional(),
	})
	.superRefine((data, ctx) => {
		if (data.is_credit_card) {
			if (!data.card_number) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Card number is required for credit card payments",
					path: ["card_number"],
				});
			}
			if (!data.cvv) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "CVV is required for credit card payments",
					path: ["cvv"],
				});
			}
			if (!data.expiry_date) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Expiry date is required for credit card payments",
					path: ["expiry_date"],
				});
			}
		} else if (data.is_transfer) {
			if (data.card_number || data.cvv || data.expiry_date) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Card details should not be provided for bank transfers",
					path: ["is_transfer"],
				});
			}
		}
	});

export type CheckoutSchemaType = z.infer<typeof CheckoutSchema>;
