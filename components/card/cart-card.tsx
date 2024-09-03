import React from "react";
import BlurImage from "../miscellaneous/blur-image";
import NumericInput from "../shared/numeric-input";
import { ProductProps } from "@/lib/products";
import { calculateDiscount, formatPrice } from "@/lib/utils";
import { useCart } from "@/hooks/cart/use-cart";
import { useServerCart } from "@/hooks/cart/use-server-cart";
import { ServerProducts } from "@/types/products.types";

const CartCard = ({ id, title, price, image, item_count }: ProductProps) => {
	const { cart } = useCart();

	const handleItemRemove = () => {
		const newCart = cart.filter((item) => item.id !== id);
		useCart.setState({ cart: newCart });
	};

	return (
		<div className="w-full flex items-center justify-between max-w-[757px] px-2">
			<div className="flex gap-x-2 lg:gap-x-4 items-center">
				<div className="flex flex-col bg-accent-card items-center p-2 max-h-[172px] max-w-[146px]">
					<BlurImage
						src={image}
						width={146}
						height={172}
						alt="product"
						className="max-w-[90%] w-full"
						draggable={false}
						quality={100}
					/>
				</div>
				<div className="flex flex-col gap-y-4 items-start">
					<p className="md:text-2xl">{title}</p>
					<NumericInput id={id} should_disable={false} />
					<button
						className="text-accent-orange md:text-lg"
						onClick={handleItemRemove}
					>
						Remove
					</button>
				</div>
			</div>
			<p className="text-2xl font-bold">{formatPrice(price * item_count)}</p>
		</div>
	);
};

export default CartCard;
