import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useFilters } from "@/hooks/filters/use-filters";
import { PRICES } from "@/lib/filters";

const PriceFilters = () => {
	const { price, updatePrice } = useFilters();

	return (
		<select
			value={price}
			onChange={(e) => updatePrice(e.target.value)}
			className="rounded-none bg-transparent border border-neutral-300 md:px-2 w-[120px] sm:w-[100px] select-none py-2 px-2"
		>
			{PRICES.map((filter) => (
				<option
					key={filter.value}
					value={filter.value}
					disabled={filter.value === "price" || filter.value === price}
					className="w-full justify-between gap-x-3 focus:bg-accent-primary/30 focus:text-accent-black font-normal !text-sm"
				>
					{filter.label.toUpperCase()}
				</option>
			))}
		</select>
	);
};

export default PriceFilters;
