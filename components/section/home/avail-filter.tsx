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

const AvailFilters = () => {
	return (
		<Select>
			<SelectTrigger className="rounded-md bg-transparent border-none md:px-2 w-[120px] select-none">
				<SelectValue placeholder="Availability" />
			</SelectTrigger>
			<SelectContent className="sm:text-lg font-[200] shadow-xl shadow-black/20 relative z-[999] w-[120px]">
				<SelectGroup>
					{AVAILABILITIES.map((avail) => (
						<SelectItem
							key={avail.value}
							value={avail.value}
							className="w-full justify-between gap-x-3 focus:bg-accent-primary/30 focus:text-accent-black font-normal !text-sm"
						>
							<span className="uppercase">{avail.label}</span>{" "}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default AvailFilters;
