"use client";

import NavBanner from "@/components/global/nav-banner";
import ItemsNav from "@/components/navigation/items-nav";
import { useProduct } from "@/hooks/product/use-product";

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
	const { products } = useProduct();
	const data = products.find((product) => product.id === productId);

	return (
		<div className="w-full flex flex-col">
			<NavBanner />
			<section className="w-full px-4 min-h-[400px] xl:min-h-[500px]">
				<ItemsNav />
				{/* <MobileNav /> */}
				<ProductDetailsContent data={data!} />
			</section>
		</div>
	);
};

export default ProductPage;
