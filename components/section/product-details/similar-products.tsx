import ProductCard from "@/components/card/product-card";
import { useProduct } from "@/hooks/product/use-product";
import { useServerProduct } from "@/hooks/product/use-server-product";
import { ServerProducts } from "@/types/products.types";

import React from "react";

const SimilarProducts = ({ productId }: { productId: string | string[] }) => {
	const { products } = useProduct();
	if (!productId) return null;
	const rests = products.filter((product) => {
		if (typeof productId === "string") {
			return product.id !== productId && product.is_in_stock;
		}
		return !productId.includes(product.id) && product.is_in_stock;
	});

	return (
		<div className="w-full mt-16 flex-col flex gap-y-6">
			<h2 className="text-xl md:text-2xl font-medium capitalize">
				You may also like
			</h2>
			<div className="w-full sm:grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 lg:gap-y-12 xl:gap-y-16 relative items-center flex flex-col overflow-hidden">
				{rests.slice(0, 4).map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</div>
	);
};

export default SimilarProducts;
