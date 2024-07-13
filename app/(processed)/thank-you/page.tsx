"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import BlurImage from "@/components/miscellaneous/blur-image";

type Props = {};

const ThankYou = (props: Props) => {
	const searchParam = useSearchParams();
	const email = searchParam.get("email");
	const name = searchParam.get("name");
	const items_length = searchParam.get("items_length");

	return (
		<div className="w-full min-h-screen flex justify-center">
			<div className="flex flex-col gap-y-4 items-center">
				<BlurImage
					src="https://cdni.iconscout.com/illustration/premium/thumb/order-confirmed-5115435-4273317.png"
					width={290}
					height={314}
					alt="product"
					className="max-w-[90%] md:max-w-[600px] w-full "
					draggable={false}
					quality={100}
				/>
				<h1 className="sm:text-2xl">
					Thank You {name} for buying {items_length} items from our store
				</h1>
				<p className="text-center">Your Order receipt will be sent to {email}</p>

				<Link href={"/"}>
					<button className="text-accent-orange">Continue Shopping</button>
				</Link>
			</div>
		</div>
	);
};

export default ThankYou;
