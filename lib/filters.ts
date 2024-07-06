export type FilterProps = {
	value: string;
	label: string;
	amount?: number;
};

export const AVAILABILITIES: FilterProps[] = [
	{ value: "0", label: "ALL" },
	{ value: "1", label: "FREE" },
];
export const PRICES: FilterProps[] = [
	{ value: "0", label: "100" },
	{ value: "1", label: "200" },
];
