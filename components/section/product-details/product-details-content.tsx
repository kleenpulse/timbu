"use client";

import SearchAndCart from "@/components/navigation/search-and-cart";
import React, { useEffect } from "react";
import ProductDetails from "./product-details";
import { ProductProps } from "@/lib/products";
import Link from "next/link";
import SimilarProducts from "./similar-products";
import ProductDetailsNav from "@/components/navigation/product-details-nav";
import PageTitle from "@/components/shared/page-title";

const ProductDetailsContent = ({ data }: { data: ProductProps }) => {
	useEffect(() => {
		document.title = `Details - ${data.title}`;
	}, [data.title]);

	if (!data) {
		return (
			<div className="grid h-[300px] md:h-[400px] w-full place-items-center">
				<p className="flex flex-col gap-y-4 uppercase">
					not found
					<Link href="/" className="text-accent-border">
						&larr; Go Back
					</Link>
				</p>
			</div>
		);
	}
	return (
		<div className="w-full relative mt-4 items-center min-h-[500px]">
			<ProductDetailsNav />
			<div className="flex w-full justify-between items-center mb-10 mt-4 lg:px-8 min-[1440px]:px-20">
				<PageTitle title="Product Details" />
			</div>
			<ProductDetails data={data} />
			<SimilarProducts productId={data.id!} />
		</div>
	);
};

export default ProductDetailsContent;
