import MasterCardIcon from "@/components/icons/master-card-icon";
import VisaCardIcon from "@/components/icons/visa-card-icon";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { CheckoutSchema } from "@/lib/schema/checkout.schema";
import { cn, formatPrice } from "@/lib/utils";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerCheckout } from "@/hooks/cart/use-server-checkout";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};
const INPUTS = [
	{
		name: "first_name",
		label: "First Name",
	},
	{
		name: "last_name",
		label: "Last Name",
	},
	{
		name: "email",
		label: "Email",
	},
	{
		name: "phone",
		label: "Phone",
	},
	{
		name: "address",
		label: "Address",
	},
];

const DeliveryAndPayment = (props: Props) => {
	const [paymentMethod, setPaymentMethod] = useState<"card" | "transfer">(
		"card"
	);
	const router = useRouter();
	const [isLoading, startTransition] = useTransition();
	const { cart } = useServerCheckout();

	const disable_payment_input = paymentMethod === "transfer";
	const checkout_form = useForm<z.infer<typeof CheckoutSchema>>({
		resolver: zodResolver(CheckoutSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
			phone: "",
			address: "",
			is_credit_card: true,
			is_transfer: false,
			card_number: "",
			cvv: "",
			expiry_date: "",
		},
	});
	checkout_form.watch("is_credit_card");
	checkout_form.watch("is_transfer");

	const delay = (ms: number) =>
		new Promise((resolve) => setTimeout(resolve, ms));

	const handleSubmit = async (values: z.infer<typeof CheckoutSchema>) => {
		startTransition(async () => {
			await delay(3000); // Simulate a 3-second delay
			router.push(
				`/thank-you?email=${values.email}&name=${values.first_name}&items_length=${cart.products.length}`
			);
			localStorage.clear();
		});
	};

	return (
		<Form {...checkout_form}>
			<form
				onSubmit={checkout_form.handleSubmit(handleSubmit)}
				className="w-full flex flex-col max-w-[548px] mt-10 lg:mt-20 mb-20 lg:mb-32 xl:mb-44"
			>
				<div className="flex flex-col">
					<div className="px-2 lg:px-4 bg-accent-white py-2 lg:py-3">
						<p className="text-xl lg:text-2xl">Delivery</p>
					</div>
					<div className="flex flex-col mt-4 lg:mt-8 gap-y-5 md:gap-y-7">
						{INPUTS.map((input) => (
							<FormField
								control={checkout_form.control}
								key={input.name}
								// @ts-ignore
								name={input.name}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											{/* @ts-ignore */}
											<input
												className=" appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent"
												placeholder={input.label}
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						))}
					</div>
				</div>
				<div className="flex flex-col mt-8 lg:mt-12">
					<div className="px-2 lg:px-4 bg-accent-white py-2 lg:py-3">
						<p className="text-xl lg:text-2xl">Payment</p>
					</div>
					<p className="mt-2 mb-4">Choose your payment method</p>

					<div className="flex flex-col gap-y-2">
						<button
							type="button"
							onClick={() => {
								setPaymentMethod("card");
								checkout_form.setValue("is_credit_card", true);
								checkout_form.setValue("is_transfer", false);
							}}
							className={cn(
								"flex w-full items-center justify-between border-[5px] border-accent-white bg-transparent p-2 transition-all",
								paymentMethod === "card"
									? "border-accent-white duration-500"
									: "border-[#eee] duration-300"
							)}
						>
							<div className="flex items-center gap-x-2">
								<span
									className={cn(
										"size-5 border-[5px]  rounded-full transition-all ",
										paymentMethod === "card"
											? "border-accent-border duration-300"
											: "border-accent-white duration-500"
									)}
								/>
								<span>Credit Card</span>
							</div>
							<div className="flex items-center gap-x-2">
								<VisaCardIcon />
								<MasterCardIcon />
							</div>
						</button>

						<FormField
							control={checkout_form.control}
							name="card_number"
							disabled={disable_payment_input}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<input
											className=" appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent disabled:cursor-not-allowed disabled:opacity-90"
											placeholder="Card Number"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex items-center justify-between gap-x-6 mt-2">
							<FormField
								control={checkout_form.control}
								name="cvv"
								disabled={disable_payment_input}
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<input
												className=" appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent disabled:cursor-not-allowed disabled:opacity-90"
												placeholder="CVV"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={checkout_form.control}
								name="expiry_date"
								disabled={disable_payment_input}
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<input
												className=" appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent disabled:cursor-not-allowed disabled:opacity-90"
												placeholder="Expiry Date"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<button
							type="button"
							onClick={() => {
								setPaymentMethod("transfer");
								checkout_form.setValue("is_credit_card", false);
								checkout_form.setValue("is_transfer", true);
							}}
							className={cn(
								"flex w-full items-center justify-between border-[5px]  bg-transparent p-2 mt-10 transition-all",
								paymentMethod === "transfer"
									? "border-accent-white duration-500"
									: "border-[#eee] duration-300"
							)}
						>
							<div className="flex items-center gap-x-2">
								<span
									className={cn(
										"size-5 border-[5px]  rounded-full transition-all ",
										paymentMethod === "transfer"
											? "border-accent-border duration-300"
											: "border-accent-white duration-500"
									)}
								/>
								<span>Transfer</span>
							</div>
						</button>
					</div>
					<button
						type="submit"
						disabled={isLoading}
						className="w-full mt-10 lg:mt-20 bg-accent-orange hover:bg-accent-primary text-white md:text-xl py-2 px-4 md:py-3 md:px-6 flex items-center justify-center "
					>
						{isLoading ? (
							<span className="flex items-center gap-x-2">
								<span className="animate-pulse">Processing...</span>{" "}
								<Loader2 className="size-4 animate-spin sm:size-5" />
							</span>
						) : (
							<span>Pay {formatPrice(cart.total)} Now</span>
						)}
					</button>
				</div>
			</form>
		</Form>
	);
};

export default DeliveryAndPayment;
