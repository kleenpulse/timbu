/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useProduct } from "@/hooks/product/use-product";
import { PRODUCTS } from "@/lib/products";
import { useLayoutEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useProducts } from "@/server/all-products.data";

// Create a query client
const queryClient = new QueryClient();

export default function ClientSideLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { addToProducts } = useProduct();

	useLayoutEffect(() => {
		addToProducts(PRODUCTS);
	}, [PRODUCTS]);

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
