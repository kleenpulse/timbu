"use client";

/* eslint-disable react-hooks/exhaustive-deps */

import useWindowHeight from "@/hooks/util-hooks/useWindowHeight";
import { cn } from "@/lib/utils";

import { ChevronUp } from "lucide-react";

import React, { useEffect, useState } from "react";

const GotoTop = () => {
	const { scrollY } = useWindowHeight();

	const [hideToTop, setHideToTop] = useState(false);
	const [hideNav, setHideNav] = useState(false);

	useEffect(() => {
		let prevScrollpos = window.scrollY;
		// console.log("PREV", prevScrollpos);
		window.onscroll = () => {
			const currentScrollPos = window.scrollY;

			if (prevScrollpos >= currentScrollPos) {
				setHideToTop(false);
			} else {
				setHideToTop(true);
			}
			prevScrollpos = currentScrollPos;
		};
	}, []);
	useEffect(() => {
		let prevScrollpos = scrollY;
		// console.log("PREV", prevScrollpos);
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (prevScrollpos >= currentScrollPos) {
				setHideNav(false);
			} else {
				setHideNav(true);
			}
			prevScrollpos = currentScrollPos;
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleTop = () => {
		window && window.scroll({ top: 0, behavior: "smooth" });
	};

	return hideToTop ? null : (
		<div
			role="button"
			onClick={handleTop}
			className={cn(
				"fixed bottom-12 right-2 z-[9999] mx-auto flex max-w-[1440px] select-none items-center rounded border border-primary bg-accent-orange/90 text-2xl text-accent-black backdrop-blur-xl transition-all duration-1000 active:scale-95 active:duration-300 max-[400px]:bottom-16 sm:bottom-16 sm:right-5 sm:text-4xl ",
				scrollY > 1000
					? "translate-x-0 opacity-100 shadow-[0_0_40px_0_rgba(0,0,0,0.16)]"
					: "translate-x-20 opacity-0",
				hideNav && "hidden"
			)}
		>
			<ChevronUp />
		</div>
	);
};

export default GotoTop;
