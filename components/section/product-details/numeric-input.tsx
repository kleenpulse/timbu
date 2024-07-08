import { useCart } from "@/hooks/cart/use-cart";
import { ProductProps } from "@/lib/products";
import React, { useState } from "react";

interface NumericInputProps {
	initialValue?: number;
	id: string;
}

const NumericInput: React.FC<NumericInputProps> = ({
	initialValue = 1,
	id,
}) => {
	const { updateQuantity, cart } = useCart();
	const [value, setValue] = useState<number>(initialValue);

	const handleIncrement = () => {
		setValue((prevValue) => prevValue + 1);
	};

	const handleDecrement = () => {
		if (value > 1) {
			setValue((prevValue) => prevValue - 1);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = parseInt(e.target.value, 10);
		if (!isNaN(newValue) && newValue >= 0 && newValue <= 9) {
			setValue(newValue);
		}
	};

	return (
		<div className="flex items-center space-x-2 border border-gray-300 max-w-[123px] px-2 sm:px-4 h-full justify-center">
			<button
				onClick={handleDecrement}
				className=" px-1 text-gray-700 rounded  text-2xl hover:scale-110"
			>
				-
			</button>
			<input
				type="number"
				value={value}
				onChange={handleChange}
				className="w-12 text-center  py-1  rounded bg-transparent font-medium text-2xl"
				min="0"
				max="9"
			/>
			<button
				onClick={handleIncrement}
				className=" px-1 text-gray-700 rounded  text-2xl hover:scale-110"
			>
				+
			</button>
		</div>
	);
};

export default NumericInput;
