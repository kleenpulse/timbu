"use client";

import NavBanner from "@/components/global/nav-banner";
import ItemsNav from "@/components/navigation/items-nav";
import MobileNav from "@/components/navigation/mobile-nav";
import ShopContent from "@/components/section/home/shop-content";

import React from "react";

const Home = () => {
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
