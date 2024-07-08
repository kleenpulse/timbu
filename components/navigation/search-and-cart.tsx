import { cn } from "@/lib/utils";
import React from "react";
import SearchIcon from "../icons/search-icon";
import CartIcon from "../icons/cart-icon";
import CartButton from "../shared/cart-button";

const SearchAndCart = ({
	className,
	has_search = true,
}: {
	className?: string;
	has_search?: boolean;
}) => {
	return (
		<div className={cn("flex items-center gap-x-4 sm:gap-x-8", className)}>
			{has_search && <SearchIcon />}

			<CartButton />
		</div>
	);
};

export default SearchAndCart;
