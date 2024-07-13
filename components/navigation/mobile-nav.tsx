"use client";

import React from "react";
import BurgerMenuIcon from "../icons/burger-menu-icon";
import SearchAndCart from "./search-and-cart";
import { useMobileNav } from "@/hooks/navigate/use-mobile-nav";
import { AnimatePresence, motion } from "framer-motion";
import { ITEMS_NAV } from "@/lib/data";
import { useItemsNav } from "@/hooks/navigate/use-items-nav";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const MobileNav = () => {
	const { navOpen, updateNavOpen } = useMobileNav();
	const { activeItem, setActiveItem } = useItemsNav();
	const overlayRef = React.useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: any) => {
		if (overlayRef.current && !overlayRef.current.contains(event.target)) {
			updateNavOpen(false);
		}
	};

	return (
		<div className="w-full flex justify-between items-center min-[690px]:hidden pt-4 relative">
			<button onClick={() => updateNavOpen(!navOpen)}>
				{navOpen ? <X /> : <BurgerMenuIcon />}
			</button>
			<SearchAndCart />
			<AnimatePresence>
				{navOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10, x: -10 }}
						animate={{ opacity: 1, y: 0, x: 0 }}
						exit={{ opacity: 0, y: -10, x: -10 }}
						onClick={handleClickOutside}
						className="absolute top-12 left-0 w-full h-full  z-10"
					>
						<div
							onClick={() => updateNavOpen(false)}
							className="fixed top-0 right-0 w-full min-h-screen "
						/>
						<div
							ref={overlayRef}
							className="flex flex-col bg-white h-[220px] w-full min-[500px]:max-w-[170px] max-w-[150px] items-start relative p-4 gap-y-5 z-20 shadow-black/10 shadow-xl	"
						>
							{ITEMS_NAV.map((item) => (
								<button
									key={item.id}
									onClick={() => {
										setActiveItem(item.name);
										updateNavOpen(false);
									}}
									className={cn(
										"flex flex-col items-center justify-center text-accent-black relative py-2 px-2 md:px-4 active:scale-95 transition overflow-hidden"
									)}
								>
									<span className="">{item.label}</span>
									<span
										className={cn(
											"absolute bottom-0 h-1.5 w-full bg-accent-orange transition-transform",
											activeItem === item.name
												? "translate-x-0 duration-500"
												: "-translate-x-full duration-300"
										)}
									/>
								</button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default MobileNav;
