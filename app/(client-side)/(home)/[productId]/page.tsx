"use client";

import NavBanner from "@/components/global/nav-banner";
import ItemsNav from "@/components/navigation/items-nav";
import { useProduct } from "@/server/single-product.data";

import dynamic from "next/dynamic";

const ProductDetailsContent = dynamic(
	() => import("@/components/section/product-details/product-details-content"),
	{
		ssr: false,
	}
);

const ProductPage = ({
	params: { productId },
}: {
	params: { productId: string };
}) => {
	if (!productId) return null;

	return (
		<div className="w-full flex flex-col">
			<NavBanner />
			<section className="w-full px-4 min-h-[400px] xl:min-h-[500px]">
				<ItemsNav />
				{/* <MobileNav /> */}
				<ProductDetailsContent id={productId} />
			</section>
		</div>
	);
};

export default ProductPage;
