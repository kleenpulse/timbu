import React from "react";
import Filters from "./filters";
import ProductGrid from "./product-grid";

type Props = {};

const ShopContent = (props: Props) => {
	return (
		<div className="flex flex-col gap-y-5 sm:gap-y-8 w-full items-center max-w-[1201px] mx-auto mt-2 sm:mt-10  px-2 md:px-4">
			<div className="justify-self-start w-full">
				<h2>Shop All</h2>
			</div>
			<Filters />
			<ProductGrid />
		</div>
	);
};

export default ShopContent;
