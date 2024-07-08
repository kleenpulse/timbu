import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductProps } from "@/lib/products";
import { ChevronDown, ChevronUp } from "lucide-react";

const MoreProductDetails = ({ data }: { data: ProductProps }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(0);
	// Initialize with index 0
	const DETAILS = [
		{
			title: "About Product",
			body: data.about,
			id: 1,
		},
		{
			title: "How to use",
			body: data.how_to_use,
			id: 2,
		},
		{
			title: "Reviews",
			body: "No reviews yet",
			id: 3,
		},
	];
	const toggleAnswer = (index: number) => {
		if (index === activeIndex) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};

	return (
		<div className="w-full  flex flex-col gap-6 mt-4 lg:mt-6  ">
			{DETAILS.map((item, index) => (
				<motion.li
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: index * 0.2 }}
					key={item.id}
					onClick={() => toggleAnswer(index)}
					className={cn(
						"flex flex-col  transition-all duration-300 relative z-30 overflow-hidden "
					)}
				>
					<div className="w-full flex items-start   gap-x-4 bg-accent-white lg:p-6x p-4 relative ">
						<p
							className={cn(
								"  text-left  transition-colors duration-300",
								activeIndex === index ? "text-black" : "text-accent-black"
							)}
						>
							{item.title}
						</p>
						<div className=" absolute top-1/2 -translate-y-1/2 right-2   grid place-items-center ">
							<button
								className={cn(
									"transition-all duration-300 text-accent-orange",
									activeIndex === index && "rotate-180 ",
									activeIndex === index ? "text-black" : "text-accent-black"
								)}
							>
								<ChevronDown size={24} className="" />
							</button>
						</div>
					</div>

					<p
						className={cn(
							" grid   overflow-hidden  transition-all [&>span]:overflow-hidden  tracking-wide  text-sm   ",
							activeIndex === index
								? "grid-rows-[1fr] duration-300 mt-2 pt-6  p-2 "
								: "grid-rows-[0fr] duration-500 "
						)}
					>
						<span className="text-accent-black">{item.body}</span>
					</p>
				</motion.li>
			))}
		</div>
	);
};

export default MoreProductDetails;
