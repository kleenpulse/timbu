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
