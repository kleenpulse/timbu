/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useProduct } from "@/hooks/product/use-product";
import { PRODUCTS } from "@/lib/products";
import { useLayoutEffect } from "react";

export default function ClientSideLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { addToProducts } = useProduct();

	useLayoutEffect(() => {
		addToProducts(PRODUCTS);
	}, [PRODUCTS]);

	return <>{children}</>;
}
