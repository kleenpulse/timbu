"use client";

import { useItemsNav } from "@/hooks/use-items-nav";
import { ITEMS_NAV } from "@/lib/data";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

const ItemsNav = (props: Props) => {
	const { activeItem, setActiveItem } = useItemsNav();

	return (
		<div className="w-full justify-center flex max-sm:hidden">
			<div className="flex items-center gap-x-2 md:gap-x-5 lg:gap-x-8 justify-center overflow-hidden ">
				{ITEMS_NAV.map((item) => (
					<button
						key={item.id}
						onClick={() => setActiveItem(item.name)}
						className={cn(
							"flex flex-col items-center justify-center text-accent-black relative py-2 px-2 md:px-4 active:scale-95 transition"
						)}
					>
						<span className="text-sm">{item.label}</span>
						<span
							className={cn(
								"absolute top-0 h-1.5 w-full bg-accent-orange transition-transform",
								activeItem === item.name
									? "translate-y-0 duration-500"
									: "-translate-y-full duration-300"
							)}
						/>
					</button>
				))}
			</div>
		</div>
	);
};

export default ItemsNav;
