import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const calculateDiscount = ({
	price,
	discount_percentage,
}: {
	price: number;
	discount_percentage: number;
}) => {
	return price - price * (discount_percentage / 100);
};

export function formatPrice(
	price: number | string,
	options: {
		currency?: "USD" | "EUR" | "GBP" | "BDT";
		notation?: Intl.NumberFormatOptions["notation"];
	} = {}
) {
	const { currency = "USD", notation = "standard" } = options;

	const numericPrice = typeof price === "string" ? parseFloat(price) : price;
	const newPrice = new Intl.NumberFormat("en-US", {
		currency,
		notation,
		style: "currency",
		maximumFractionDigits: 0,
	}).format(numericPrice);
	return newPrice;
}
