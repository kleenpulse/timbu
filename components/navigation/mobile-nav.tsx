import React from "react";
import BurgerMenuIcon from "../icons/burger-menu-icon";
import SearchAndCart from "./search-and-cart";

const MobileNav = () => {
	return (
		<div className="w-full flex justify-between items-center sm:hidden pt-4">
			<button>
				<BurgerMenuIcon />
			</button>
			<SearchAndCart />
		</div>
	);
};

export default MobileNav;
