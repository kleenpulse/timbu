/* eslint-disable react-hooks/exhaustive-deps */
import CheckoutCard from "@/components/card/checkout-card";
import { useCheckout } from "@/hooks/cart/use-checkout";
import { calculateDiscount, cn, formatPrice } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React, { useEffect, useMemo, useState, useTransition } from "react";
import EmptyCart from "../cart/empty-cart";
import DeliveryAndPayment from "./delivery-and-payment";
import { useCart } from "@/hooks/cart/use-cart";
import { useServerCheckout } from "@/hooks/cart/use-server-checkout";

const SHIPPING = [
	{ value: "door", label: "Door Delivery" },
	{ value: "station", label: "Station Pick Up" },
];

const OrderSummary = () => {
	const [isPending, startTransition] = useTransition();
	const [text, setText] = useState("");
	const { cart, updateShipping, updateTotal } = useServerCheckout();

	useEffect(() => {
		updateShipping(cart.shipping);
	}, [cart.shipping]);

	const sub_total = cart.products.reduce(
		(acc, item) => acc + item.current_price[0].USD[0] * item.item_count,
		0
	);
	useEffect(() => {
		updateTotal(sub_total);
	}, [sub_total]);
	if (cart.products.length === 0) return <EmptyCart title="Checkout" />;
	const products = cart.products;

	return (
		<div className="w-full flex flex-col  gap-y-2 items-center">
			<div className="flex w-full justify-between items-center bg-accent-white px-2 lg:px-4 py-2 lg:py-3 md:text-xl lg:text-2xl">
				<p>Order Summary</p>
				<p>Total</p>
			</div>
			<div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-x-8 xl:gap-x-12 gap-y-12">
				<div className="flex flex-col gap-y-10 w-full max-h-[400px] xl:max-h-[600px] overflow-y-auto cart__scroll">
					{products.map((item) => (
						<CheckoutCard
							key={item.id}
							{...item}
							image={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.photos[0].url}`}
						/>
					))}
				</div>
				<div className="flex flex-col gap-y-8 md:gap-y-12 flex-shrink-x0 w-full max-w-[302px] xl:max-w-[359px] h-full justify-between  md:min-h-[425px] ">
					<div className="flex flex-col gap-y-10 w-full">
						<div className="flex items-center  h-[50px] ">
							<input
								className="h-full w-full  border border-gray-300 border-r-0 bg-secondary px-4 py-3   placeholder:text-gray-400 outline-none focus-within:outline focus-within:outline-accent-primary"
								placeholder="Discount code"
								value={text}
								onChange={(e) => setText(e.target.value)}
								required
								type="text"
								id="discount"
							/>
							<button
								className={cn(
									"flex items-center justify-center gap-x-4  border-none bg-accent-border px-5 py-3 text-xs text-white md:px-8  sm:text-base whitespace-nowrap w-fit",
									isPending
										? "size-10 cursor-not-allowed md:size-14"
										: "h-full w-fit cursor-pointer sm:px-6 md:py-4"
								)}
							>
								{isPending ? <Loader2 className="animate-spin" /> : "Apply"}
							</button>
						</div>
						<div className="flex w-full items-center justify-between">
							<span className="md:text-lg">Shipping Fee</span>
							<span className="font-bold sm:text-xl md:text-2xl">$0</span>
						</div>
						<select
							value={cart.shipping}
							onChange={(e) =>
								updateShipping(e.target.value as "door" | "station")
							}
							className="flex w-full items-center justify-between border border-gray-300 px-4 py-2  h-[50px] bg-transparent"
						>
							{SHIPPING.map((item) => (
								<option key={item.value} value={item.value}>
									{item.label}
								</option>
							))}
						</select>
					</div>
					<div className="flex w-full items-center justify-between border border-gray-300 px-4 py-2  h-[50px]">
						<span className="md:text-lg">Subtotal</span>
						<span className="font-bold text-lg sm:text-xl md:text-2xl">
							{formatPrice(sub_total)}
							{/* ${cart.total} */}
						</span>
					</div>
				</div>
			</div>
			<div className=" w-full bg-accent-white py-4 lg:py-6 mt-4 lg:mt-10" />
			<DeliveryAndPayment />
		</div>
	);
};

export default OrderSummary;
