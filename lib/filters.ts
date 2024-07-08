export type FilterProps = {
	value: string;
	label: string;
	amount?: number;
};

export const AVAILABILITIES: FilterProps[] = [
	{ value: "availability", label: "Availability" },
	{ value: "all", label: "ALL" },
	{ value: "in_stock", label: "In Stock" },
	{ value: "out_of_stock", label: "Out of Stock" },
];
export const PRICES: FilterProps[] = [
	{ value: "price", label: "Price" },
	{ value: "all", label: "All" },
	{ value: "100", label: "100" },
	{ value: "200", label: "200" },
];
