import * as React from "react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { AVAILABILITIES } from "@/lib/filters";
import { useFilters } from "@/hooks/filters/use-filters";

const AvailFilters = () => {
	const { availability, updateAvailability } = useFilters();

	return (
		<select
			defaultValue={availability}
			onChange={(e) => updateAvailability(e.target.value)}
			className="rounded-none bg-transparent border border-neutral-300 md:px-2 w-[130px] sm:w-[140px] select-none py-2 px-2"
		>
			{AVAILABILITIES.map((filter) => (
				<option
					key={filter.value}
					value={filter.value}
					disabled={
						filter.value === "availability" || filter.value === availability
					}
					className="w-full justify-between gap-x-3 focus:bg-accent-primary/30 focus:text-accent-black font-normal !text-sm"
				>
					{filter.label}
				</option>
			))}
		</select>
	);
};

export default AvailFilters;
