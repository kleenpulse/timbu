"use client";

import BackButton from "@/components/shared/back-button";
import React, { useEffect } from "react";
import CartItems from "./cart-items";
import SimilarProducts from "../product-details/similar-products";
import { useCart } from "@/hooks/cart/use-cart";
import PageTitle from "@/components/shared/page-title";
import { useServerCart } from "@/hooks/cart/use-server-cart";

type Props = {};

const CartContent = (props: Props) => {
	const { cart } = useCart();
	const ids_array = cart.map((item) => item.id);

	useEffect(() => {
		document.title = `Cart - ${cart.length} Product${
			cart.length > 1 ? "s" : ""
		}`;
	}, [cart.length]);

	return (
		<div className="w-full flex flex-col gap-y-8">
			<div className="mt-6 sm:mt-2">
				<BackButton />
			</div>
			<PageTitle title="Cart" count={cart.length} />
			<CartItems />
			<SimilarProducts productId={ids_array} />
		</div>
	);
};

export default CartContent;
