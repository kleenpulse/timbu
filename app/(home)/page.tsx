"use client";

import NavBanner from "@/components/global/nav-banner";
import ItemsNav from "@/components/navigation/items-nav";
import ShopContent from "@/components/section/home/shop-content";

import React from "react";

const Home = () => {
	return (
		<div className="w-full flex flex-col">
			<NavBanner />
			<ItemsNav />
			<ShopContent />
		</div>
	);
};

export default Home;
