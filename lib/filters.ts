export type FilterProps = {
	value: string;
	label: string;
	amount?: number;
};

export const AVAILABILITIES: FilterProps[] = [
	{ value: "all", label: "ALL" },
	{ value: "in_stock", label: "In Stock" },
	{ value: "out_of_stock", label: "Out of Stock" },
];
export const PRICES: FilterProps[] = [
	{ value: "0", label: "100" },
	{ value: "1", label: "200" },
];
