import FilterIcon from "@/components/icons/filter-icon";
import React from "react";
import AvailFilters from "./avail-filter";
import PriceFilters from "./price-filter";
import SearchAndCart from "@/components/navigation/search-and-cart";

const Filters = () => {
	return (
		<div className="w-full justify-center sm:justify-between items-center flex gap-x-5 lg:gap-x-8">
			<div className="w-full justify-center sm:justify-start items-center flex gap-x-5 lg:gap-x-8">
				<span className="hidden sm:flex items-center gap-x-2 text-accent-black">
					<FilterIcon className="text-icon-black" />
					<span>Filter by:</span>
				</span>
				<AvailFilters />
				<PriceFilters />
			</div>
			<SearchAndCart className="max-sm:hidden" />
		</div>
	);
};

export default Filters;
