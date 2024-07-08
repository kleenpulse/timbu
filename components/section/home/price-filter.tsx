import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { PRICES } from "@/lib/filters";

const PriceFilters = () => {
	return (
		<Select>
			<SelectTrigger className="rounded-none bg-transparent border border-neutral-300 md:px-2 w-[120px] sm:w-[80px] select-none py-2 ">
				<SelectValue placeholder="Price" />
			</SelectTrigger>
			<SelectContent className="sm:text-lg font-[200] shadow-xl shadow-black/20 relative z-[999] w-[80px]">
				<SelectGroup>
					{PRICES.map((price) => (
						<SelectItem
							key={price.value}
							value={price.value}
							className="w-full justify-between gap-x-3 focus:bg-accent-primary/30 focus:text-accent-black font-normal !text-sm"
						>
							<span className="uppercase">{price.label}</span>{" "}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default PriceFilters;
