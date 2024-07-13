/* eslint-disable react-hooks/exhaustive-deps */
import ProductCard from "@/components/card/product-card";
import LoadingSpinner from "@/components/miscellaneous/LoadingSpinner";
import NoProduct from "@/components/shared/no-product";
import { useSearch } from "@/hooks/filters/use-search";
import { useProduct } from "@/hooks/product/use-product";
import { useServerProduct } from "@/hooks/product/use-server-product";
import useWindowWidth from "@/hooks/util-hooks/use-window-width";
import { ProductProps } from "@/lib/products";
import { ProductData, ServerProducts } from "@/types/products.types";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useState } from "react";

type Props = {};
const Pagination = dynamic(() => import("react-paginate"), {
	ssr: false,
	loading: () => <LoadingSpinner />,
});
const ProductGrid = (props: Props) => {
	// const { products: PRODUCTS } = useProduct();
	const { products: PRODUCTS } = useServerProduct();
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	const { winWidth } = useWindowWidth();
	const [perPage, setPerPage] = useState(winWidth < 600 ? "3" : "12");
	const { updateSearchTerm, updateShowSearch, show_search, searchTerm } =
		useSearch();

	useEffect(() => {
		if (winWidth < 640) {
			setPerPage("3");
		}
		if (winWidth > 640) {
			setPerPage("6");
		}
		if (winWidth > 1024) {
			setPerPage("12");
		}
	}, [winWidth]);

	const [subset, setSubset] = useState<ServerProducts[]>([]);

	const startIndex = currentPage * Number(perPage);
	const endIndex = startIndex + Number(perPage);

	const handlePageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected);
		window?.scrollTo({ top: 0, behavior: "smooth" });
	};
	console.log("TIMBU DATA", PRODUCTS);
	// filter by search term
	const filteredProducts = useMemo(() => {
		if (!PRODUCTS.length) return [];
		return PRODUCTS.filter((product) => {
			if (!(searchTerm.length > 1) || PRODUCTS.length < 1) {
				return product;
			}
			return product.name.toLowerCase().includes(searchTerm.toLowerCase());
		});
	}, [PRODUCTS, searchTerm]);

	useEffect(() => {
		if (filteredProducts.length < 1) return;
		setTotalPages(Math.ceil(filteredProducts.length / Number(perPage)));
		setSubset(filteredProducts.slice(startIndex, endIndex));
	}, [filteredProducts, perPage, startIndex, endIndex]);

	useEffect(() => {
		const perPage = localStorage.getItem("perPage");
		if (perPage && typeof perPage === "string") {
			setPerPage(perPage);
			return;
		}
	}, []);

	return (
		<div className="w-full min-h-[500px] relative overflow-hidden">
			{filteredProducts.length === 0 && searchTerm.length > 1 && (
				<NoProduct text={searchTerm} image="/no-product.webp" />
			)}
			<motion.div
				initial="productCards"
				animate="whileInView"
				whileInView="whileInView"
				transition={{ duration: 0.3, staggerChildren: 0.2 }}
				className="w-full min-[500px]:grid  min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-x-8 min-[1440px]:gap-x-10 gap-y-8 lg:gap-y-12 xl:gap-y-16 relative items-center flex flex-col overflow-hidden"
			>
				<AnimatePresence>
					{filteredProducts.length > 0 &&
						subset.length > 0 &&
						subset.map((product) => (
							<ProductCard
								key={product.id}
								{...product}
								image={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.photos[0].url}`}
							/>
						))}
				</AnimatePresence>
			</motion.div>
			<AnimatePresence>
				{filteredProducts.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						className="mt-8 md:mt-12 lg:mt-16 flex w-full justify-center"
					>
						{totalPages > 1 && (
							<Pagination
								breakLabel="..."
								nextLabel="Next "
								previousLabel=" Previous"
								previousAriaLabel="Previous"
								nextAriaLabel="Next"
								pageCount={totalPages}
								// onPageChange={({ selected }) => setCurrentPage(selected)}
								onPageChange={handlePageChange}
								pageRangeDisplayed={3}
								marginPagesDisplayed={2}
								className="flex select-none items-center justify-center rounded-md  px-4"
								pageClassName="w-8 h-8 flex justify-center items-center  "
								previousClassName="pr-2 lg:pr-4 text-accent-orange  font-medium"
								nextClassName="pl-2 lg:pl-4 text-accent-orange font-medium"
								pageLinkClassName="  w-full h-full flex items-center justify-center"
								activeClassName="bg-accent-orange !text-white  font-medium rounded-md"
								renderOnZeroPageCount={null}
								disabledClassName="cursor-not-allowed opacity-70"
								disabledLinkClassName="cursor-not-allowed opacity-70"
							/>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ProductGrid;
