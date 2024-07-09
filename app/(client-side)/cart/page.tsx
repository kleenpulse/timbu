import NavBanner from "@/components/global/nav-banner";
import ItemsNav from "@/components/navigation/items-nav";
import CartContent from "@/components/section/cart/cart-content";
import React from "react";

type Props = {};

const CartPage = (props: Props) => {
	return (
		<div className="w-full flex flex-col">
			<NavBanner />
			<section className="w-full px-4 min-h-[400px] xl:min-h-[500px]">
				<ItemsNav />
				{/* <MobileNav /> */}
				<CartContent />
			</section>
		</div>
	);
};

export default CartPage;
