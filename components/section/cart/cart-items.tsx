import CartCard from "@/components/card/cart-card";
import DoorDeliveryIcon from "@/components/icons/door-delivery-icon";
import StationIcon from "@/components/icons/station-icon";
import { useCart } from "@/hooks/cart/use-cart";
import React, { useState } from "react";
import EmptyCart from "./empty-cart";
import { calculateDiscount, cn } from "@/lib/utils";
import { useCheckout } from "@/hooks/cart/use-checkout";
import { useRouter } from "next/navigation";

type Props = {};

const CartItems = (props: Props) => {
	const router = useRouter();
	const { cart } = useCart();
	const { addToCheckout } = useCheckout();
	const [delivery, setDelivery] = useState<"door" | "station">("door");

	if (cart.length === 0) return <EmptyCart />;
	const handleCheckout = () => {
		addToCheckout({
			products: cart,
			shipping: delivery,
			total: sub_total,
		});
		router.push("/checkout");
	};
	const sub_total = cart.reduce(
		(acc, item) =>
			acc +
			calculateDiscount({
				price: item.price * item.item_count,
				discount_percentage: item.discount_percentage,
			}),
		0
	);
	const total_item_count = cart.reduce((acc, item) => acc + item.item_count, 0);

	return (
		<div className="w-full flex flex-col md:flex-row md:justify-between md:items-start md:gap-x-8 xl:gap-x-16 gap-y-10">
			<div className="flex flex-col gap-y-10 w-full max-h-[400px] xl:max-h-[600px] overflow-y-auto cart__scroll">
				{cart.map((item) => (
					<CartCard key={item.id} {...item} />
				))}
			</div>
			<div className="flex flex-col gap-y-8 md:gap-y-12 flex-shrink-0 ">
				<button
					onClick={() => setDelivery("door")}
					className={cn(
						"flex flex-col items-center justify-center border border-gray-300 px-4 md:px-16 py-3 lg:px-20 xl:px-24 hover:bg-accent-primary/50 hover:border-accent-border ",
						delivery === "door" && "bg-accent-primary/50 border-accent-border"
					)}
				>
					<DoorDeliveryIcon />
					<span>Door Delivery</span>
				</button>
				<button
					onClick={() => setDelivery("station")}
					className={cn(
						"flex flex-col items-center justify-center border border-gray-300 px-4 md:px-16 py-3 lg:px-20 xl:px-24 hover:bg-accent-primary/50 hover:border-accent-border ",
						delivery === "station" &&
							"bg-accent-primary/50 border-accent-border"
					)}
				>
					<StationIcon />
					<span>Station Pick Up</span>
				</button>
				<div className="flex w-full items-center justify-between border border-gray-300 px-4 py-2 md:py-4">
					<span className="md:text-lg">Subtotal</span>
					<span className="font-bold text-lg sm:text-xl md:text-2xl">
						${sub_total}
					</span>
				</div>
				<button
					type="button"
					onClick={handleCheckout}
					className="w-full bg-accent-orange text-white py-2 px-4 lg:py-3  disabled:bg-accent-white disabled:text-accent-black disabled:opacity-70 disabled:border disabled:border-accent-primary disabled:cursor-not-allowed active:scale-95 transition disabled:scale-100 h-full"
				>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default CartItems;
