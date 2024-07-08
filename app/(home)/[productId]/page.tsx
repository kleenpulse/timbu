import NavBanner from "@/components/global/nav-banner";
import ItemsNav from "@/components/navigation/items-nav";
import MobileNav from "@/components/navigation/mobile-nav";

import { PRODUCTS } from "@/lib/products";
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
	const data = PRODUCTS.find((product) => product.id === productId);

	return (
		<div className="w-full flex flex-col">
			<NavBanner />
			<section className="w-full px-4">
				<ItemsNav />
				{/* <MobileNav /> */}
				<ProductDetailsContent data={data!} />
			</section>
		</div>
	);
};

export default ProductPage;
