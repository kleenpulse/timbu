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

import { useServerProduct } from "@/hooks/product/use-server-product";
import { ServerProducts } from "@/types/products.types";
import { useProducts } from "@/server/all-products.data";
import { useProduct } from "@/hooks/product/use-product";

const ProductDetailsContent = ({ id }: { id: string }) => {
	const { products } = useProduct();

	const product = products?.find((p) => p.id === id);

	useEffect(() => {
		if (!product) return;
		document.title = `Details - ${product.title}`;
	}, [product]);

	if (!products) {
		return (
			<div className="grid h-[300px] md:h-[400px] w-full place-items-center">
				<p className="flex flex-col gap-y-4 uppercase">Loading</p>
			</div>
		);
	}
	if (!product) {
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
			{/* @ts-ignore */}
			<ProductDetails data={product} />
			<SimilarProducts productId={product.id!} />
		</div>
	);
};

export default ProductDetailsContent;
