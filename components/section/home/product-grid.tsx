/* eslint-disable react-hooks/exhaustive-deps */
import ProductCard from "@/components/card/product-card";
import LoadingSpinner from "@/components/miscellaneous/LoadingSpinner";
import { useProduct } from "@/hooks/product/use-product";
import useWindowWidth from "@/hooks/util-hooks/use-window-width";
import { ProductProps } from "@/lib/products";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

type Props = {};
const Pagination = dynamic(() => import("react-paginate"), {
	ssr: false,
	loading: () => <LoadingSpinner />,
});
const ProductGrid = (props: Props) => {
	const { products: PRODUCTS } = useProduct();
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	const { winWidth } = useWindowWidth();
	const [perPage, setPerPage] = useState(winWidth < 600 ? "3" : "12");

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

	const [subset, setSubset] = useState<ProductProps[]>([]);

	const startIndex = currentPage * Number(perPage);
	const endIndex = startIndex + Number(perPage);

	const handlePageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected);
		window?.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		if (PRODUCTS.length < 1) return;
		setTotalPages(Math.ceil(PRODUCTS.length / Number(perPage)));
		setSubset(PRODUCTS.slice(startIndex, endIndex));
	}, [PRODUCTS, perPage]);

	useEffect(() => {
		const perPage = localStorage.getItem("perPage");
		if (perPage && typeof perPage === "string") {
			setPerPage(perPage);
			return;
		}
	}, []);

	return (
		<div className="w-full min-h-screen">
			<motion.div
				initial="productCards"
				animate="whileInView"
				whileInView="whileInView"
				transition={{ duration: 0.3, staggerChildren: 0.2 }}
				className="w-full sm:grid  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-x-8 min-[1440px]:gap-x-10 gap-y-8 lg:gap-y-12 xl:gap-y-16 relative items-center flex flex-col"
			>
				<AnimatePresence>
					{subset.length > 0 &&
						subset.map((product) => (
							<ProductCard key={product.id} {...product} />
						))}
				</AnimatePresence>
			</motion.div>
			<div className="mt-8 md:mt-12 lg:mt-16 flex w-full justify-center">
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
			</div>
		</div>
	);
};

export default ProductGrid;
