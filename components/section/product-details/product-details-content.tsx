/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import SearchAndCart from "@/components/navigation/search-and-cart";
import React, { useEffect } from "react";
import ProductDetails from "./product-details";
import { ProductProps } from "@/lib/products";
import Link from "next/link";
import SimilarProducts from "./similar-products";
import ProductDetailsNav from "@/components/navigation/product-details-nav";
import PageTitle from "@/components/shared/page-title";
import { useProduct } from "@/server/single-product.data";
import { useServerProduct } from "@/hooks/product/use-server-product";
import { ServerProducts } from "@/types/products.types";

const ProductDetailsContent = ({ id }: { id: string }) => {
	const { data, isLoading } = useProduct(id);
	const { products } = useServerProduct();
	useEffect(() => {
		if (!data) return;
		document.title = `Details - ${data}`;
	}, [data?.name]);

	if (isLoading) {
		return (
			<div className="grid h-[300px] md:h-[400px] w-full place-items-center">
				<p className="flex flex-col gap-y-4 uppercase">Loading</p>
			</div>
		);
	}
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
	const product_data = data as unknown as ServerProducts;

	const product = products?.find((p) => p.id === id);
	const price = product?.current_price[0].USD[0];
	console.log("SINGLE PRODUCT DATA", data);
	const mod_data = {
		...product_data,
		current_price: [
			{
				USD: [price],
			},
		],
	};
	return (
		<div className="w-full relative mt-4 items-center min-h-[500px]">
			<ProductDetailsNav />
			<div className="flex w-full justify-between items-center mb-10 mt-4 lg:px-8 min-[1440px]:px-20">
				<PageTitle title="Product Details" />
			</div>
			{/* @ts-ignore */}
			<ProductDetails data={mod_data} />
			<SimilarProducts productId={mod_data.id!} />
		</div>
	);
};

export default ProductDetailsContent;
