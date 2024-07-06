import React from "react";
import Filters from "./filters";
import ProductGrid from "./product-grid";

type Props = {};

const ShopContent = (props: Props) => {
	return (
		<div className="flex flex-col gap-y-8 w-full items-center max-w-[1201px] mx-auto mt-10  px-2 md:px-4">
			<Filters />
			<ProductGrid />
		</div>
	);
};

export default ShopContent;
