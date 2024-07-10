import { useSearch } from "@/hooks/filters/use-search";
import SearchIcon from "../icons/search-icon";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {};

const SearchInput = (props: Props) => {
	const { updateSearchTerm, updateShowSearch, show_search, searchTerm } =
		useSearch();
	return (
		<div className="   flex items-center">
			<AnimatePresence>
				{show_search ? (
					<motion.div
						initial={{ y: 20 }}
						animate={{ y: 0 }}
						exit={{ y: 20 }}
						className="border outline-none relative"
					>
						<input
							onChange={(e) => updateSearchTerm(e.target.value)}
							value={searchTerm}
							type="text"
							autoFocus
							className="  py-0.5 bg-secondary px-4 pr-6  placeholder:text-gray-400 outline-none focus-within:border-gray-500 focus-within:outline-accent-primary text-sm"
						/>
						<button
							className="absolute right-1 top-1/2 -translate-y-1/2 text-accent-border"
							onClick={() => {
								updateSearchTerm("");
								updateShowSearch(false);
							}}
						>
							<X className="size-4" />
						</button>
					</motion.div>
				) : (
					<button onClick={() => updateShowSearch(true)}>
						<SearchIcon className="size-5 md:size-6" />
					</button>
				)}
			</AnimatePresence>
		</div>
	);
};

export default SearchInput;
