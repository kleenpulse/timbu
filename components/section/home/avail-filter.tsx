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
			<SelectTrigger
				defaultChecked
				className="rounded-none bg-transparent border border-neutral-300 md:px-2 w-[120px] select-none py-2"
			>
				<SelectValue placeholder="Availability" />
			</SelectTrigger>
			<SelectContent className="sm:text-lg font-[200] shadow-xl shadow-black/20 relative z-[999] w-[120px]">
				<SelectGroup>
					{AVAILABILITIES.map((avail) => (
						<SelectItem
							key={avail.value}
							value={avail.value}
							defaultValue={"all"}
							className="w-full justify-between gap-x-3 focus:bg-accent-primary/30 focus:text-accent-black font-normal !text-xs pb-2"
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
