"use client";

import BackButton from "@/components/shared/back-button";
import PageTitle from "@/components/shared/page-title";
import React, { useEffect } from "react";
import OrderSummary from "./order-summary";
import { useCheckout } from "@/hooks/cart/use-checkout";
import { usePathname } from "next/navigation";

type Props = {};

const CheckoutContent = (props: Props) => {
	const { cart } = useCheckout();

	useEffect(() => {
		document.title = `Checkout - ${cart.products.length} Product${
			cart.products.length > 1 ? "s" : ""
		}`;
	}, [cart.products.length]);
	return (
		<div className="w-full flex flex-col gap-y-8 px-4 xl:px-8 min-h-[400px] xl:min-h-[500px]">
			<div>
				<BackButton />
			</div>
			<PageTitle title="Checkout" count={cart.products.length} />
			<OrderSummary />
		</div>
	);
};

export default CheckoutContent;
