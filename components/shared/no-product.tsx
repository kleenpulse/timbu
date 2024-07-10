import Image from "next/image";

import { motion } from "framer-motion";
import { useSearch } from "@/hooks/filters/use-search";
import { Trash } from "lucide-react";

const NoProduct = ({ text, image }: { text: string; image: string }) => {
	const { searchTerm, updateSearchTerm, updateShowSearch } = useSearch();

	return (
		<motion.div
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, transitionDuration: "0ms", y: 30 }}
			className="flex flex-col bg-[#f8f8f8] min-h-[500px] absolute top-0 w-full z-50"
		>
			<div className="flex flex-col items-center gap-y-2 sm:gap-y-4 ">
				<Image src={image} width={300} height={300} alt="no message" />
				<div className="flex flex-col items-center">
					<p className="mr-2">No search result found for </p>
					<b className="max-w-[300px] overflow-x-auto text-accent-color md:max-w-[500px] lg:max-w-[700px]">
						&quot;{text}&quot;
					</b>
				</div>
				<button
					onClick={() => {
						updateSearchTerm("");
						updateShowSearch(false);
					}}
					aria-label="clear search"
					className="group/clear px-4  gap-x-3 bg-accent-color py-1 sm:py-3 hover:opacity-90 active:scale-90 relative flex border items-center"
				>
					<span>Clear search</span>
					<span>
						<Trash
							size={18}
							className="sm:scale-0 transform-gpu sm:opacity-0 transition-transform duration-200 group-hover/clear:scale-100 group-hover/clear:opacity-100"
							aria-hidden
						/>
					</span>
				</button>
			</div>
		</motion.div>
	);
};

export default NoProduct;
