import FilterIcon from "@/components/icons/filter-icon";
import React from "react";
import AvailFilters from "./avail-filter";
import PriceFilters from "./price-filter";

const Filters = () => {
	return (
		<div className="w-full items-center flex gap-x-5 lg:gap-x-8">
			<span className="flex items-center gap-x-2 text-accent-black">
				<FilterIcon className="text-icon-black" />
				<span>Filter by:</span>
			</span>
			<AvailFilters />
			<PriceFilters />
		</div>
	);
};

export default Filters;
