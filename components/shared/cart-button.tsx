import { useCart } from "@/hooks/cart/use-cart";
import React from "react";
import CartIcon from "../icons/cart-icon";
import CartNotEmptyIcon from "../icons/cart-not-empty";
import Link from "next/link";

type Props = {};

const CartButton = (props: Props) => {
	const { cart } = useCart();

	return (
		<Link href="/cart">
			{cart.length > 0 ? <CartNotEmptyIcon /> : <CartIcon />}
		</Link>
	);
};

export default CartButton;
