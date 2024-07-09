import React from "react";
import Filters from "./filters";
import ProductGrid from "./product-grid";
import PageTitle from "@/components/shared/page-title";
import { useItemsNav } from "@/hooks/navigate/use-items-nav";
import { ITEMS_NAV } from "@/lib/data";

type Props = {};

const ShopContent = (props: Props) => {
	const { activeItem, setActiveItem } = useItemsNav();
	const label = ITEMS_NAV.find((item) => item.name === activeItem)?.label!;

	return (
		<div className="flex flex-col gap-y-5 sm:gap-y-8 w-full items-center max-w-[1201px] mx-auto mt-2 sm:mt-10  px-2 md:px-4">
			<div className="justify-self-start w-full">
				<PageTitle title={label!} />
			</div>
			<Filters />
			<ProductGrid />
		</div>
	);
};

export default ShopContent;
