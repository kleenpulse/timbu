import React from "react";
import BlurImage from "../miscellaneous/blur-image";
import NumericInput from "../section/product-details/numeric-input";
import { ProductProps } from "@/lib/products";
import { calculateDiscount } from "@/lib/utils";
import { useCart } from "@/hooks/cart/use-cart";

const CartCard = ({
	image,
	title,
	price,
	discount_percentage,
	id,
}: ProductProps) => {
	const { cart } = useCart();

	const handleItemRemove = () => {
		const newCart = cart.filter((item) => item.id !== id);
		useCart.setState({ cart: newCart });
	};

	return (
		<div className="w-full flex items-center justify-between max-w-[757px]">
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
					<NumericInput id="1" />
					<button
						className="text-accent-orange md:text-lg"
						onClick={handleItemRemove}
					>
						Remove
					</button>
				</div>
			</div>
			<p className="text-2xl font-bold">
				${calculateDiscount({ price, discount_percentage })}
			</p>
		</div>
	);
};

export default CartCard;
