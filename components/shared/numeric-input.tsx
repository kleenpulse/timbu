/* eslint-disable react-hooks/exhaustive-deps */
import { useCart } from "@/hooks/cart/use-cart";
import { useServerCart } from "@/hooks/cart/use-server-cart";
import { useProduct } from "@/hooks/product/use-product";
import { useServerProduct } from "@/hooks/product/use-server-product";
import { ProductProps } from "@/lib/products";
import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";

interface NumericInputProps {
	initialValue?: number;
	id: string;
	should_disable: boolean;
}

const NumericInput: React.FC<NumericInputProps> = ({
	initialValue = 1,
	id,
	should_disable,
}) => {
	const { updateQuantity, cart } = useCart();
	const { updateQuantity: updateQuantityProduct, products } = useProduct();
	const cart_item = cart.find((product) => product.id === id);
	const product_item = products.find((product) => product.id === id);
	const cart_item_count = cart_item?.item_count! ?? product_item?.item_count!;
	const [value, setValue] = useState<number>(0);
	useEffect(() => {
		setValue(cart_item_count);
	}, []);

	const handleIncrement = () => {
		updateQuantity(id, cart_item_count! + 1);
		updateQuantityProduct(id, cart_item_count! + 1);
		setValue((prevValue) => prevValue + 1);
	};

	const handleDecrement = () => {
		if (value > 1) {
			setValue((prevValue) => prevValue - 1);
			updateQuantity(id, cart_item_count! - 1);
			updateQuantityProduct(id, cart_item_count! - 1);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		const newValue = parseInt(e.target.value, 10);
		if (!isNaN(newValue) && newValue >= 0 && newValue <= 9) {
			setValue(newValue);

			updateQuantity(id, newValue);
			updateQuantityProduct(id, newValue);
		}
	};
	const count_is_ten = value === 10 || cart_item_count === 10;
	return (
		<div
			className={cn(
				"flex items-center sm:space-x-2 border border-gray-300 max-w-[100px] sm:max-w-[123px] px-2 sm:px-4 h-full justify-center",
				should_disable && "cursor-not-allowed opacity-85"
			)}
		>
			<button
				onClick={handleDecrement}
				disabled={should_disable}
				className="disabled:cursor-not-allowed px-1 text-gray-700 rounded  text-2xl hover:scale-110"
			>
				-
			</button>
			<input
				type="number"
				id={id}
				name={id}
				value={value}
				onChange={handleChange}
				disabled
				className="sm:w-12 text-center  py-1  rounded bg-transparent font-medium text-2xl disabled:cursor-default"
				min="0"
				max="9"
			/>
			<button
				onClick={handleIncrement}
				disabled={should_disable || count_is_ten}
				className="disabled:cursor-not-allowed px-1 text-gray-700 rounded  text-2xl hover:scale-110"
			>
				+
			</button>
		</div>
	);
};

export default NumericInput;
