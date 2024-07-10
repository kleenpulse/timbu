import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const EmptyCart = ({ title }: { title?: string }) => {
	const router = useRouter();

	return (
		<div className="min-h-[500px] w-full grid place-items-center">
			<div className="flex flex-col gap-y-4 items-center">
				<p className="text-2xl uppercase md:text-4xl">{title} Cart is empty</p>
				<button
					onClick={() => {
						if (title && title.length > 1) {
							router.push("/cart");
							return;
						}

						router.push("/");
					}}
					className="text-lg md:text-2xl text-accent-orange flex items-center gap-x-2 group/link hover:underline"
				>
					{title && title.length > 1 ? (
						<span>back to cart</span>
					) : (
						<span>Start shopping</span>
					)}
					<ArrowRight className="group-hover/link:translate-x-2 transition" />
				</button>
			</div>
		</div>
	);
};

export default EmptyCart;
