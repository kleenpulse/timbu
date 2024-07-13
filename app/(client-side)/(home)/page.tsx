/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import NavBanner from "@/components/global/nav-banner";
import ItemsNav from "@/components/navigation/items-nav";
import MobileNav from "@/components/navigation/mobile-nav";
import ShopContent from "@/components/section/home/shop-content";
import { useServerProduct } from "@/hooks/product/use-server-product";
import { useProducts } from "@/server/all-products.data";

import React, { useEffect } from "react";

const Home = () => {
	const { data } = useProducts();
	const { addToProducts } = useServerProduct();

	useEffect(() => {
		if (data.items.length > 0) {
			const mod_data = data.items.map((item) => {
				return {
					...item,
					item_count: 1,
				};
			});
			addToProducts(mod_data);
		}
	}, [data?.items.length, data]);
	useEffect(() => {
		document.title = "Timbu | Shop All";
	}, []);

	return (
		<div className="w-full flex flex-col">
			<NavBanner />
			<section className="w-full px-4">
				<ItemsNav />
				<MobileNav />
				<ShopContent />
			</section>
		</div>
	);
};

export default Home;
