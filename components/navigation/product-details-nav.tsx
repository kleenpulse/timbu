import { cn } from "@/lib/utils";
import React from "react";
import SearchIcon from "../icons/search-icon";
import CartIcon from "../icons/cart-icon";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import CartButton from "../shared/cart-button";

const ProductDetailsNav = ({ className }: { className?: string }) => {
	const router = useRouter();

	return (
		<div
			className={cn("flex items-center justify-between w-full mb-8", className)}
		>
			<button type="button" onClick={() => router.back()}>
				<ArrowLeft size={18} />
			</button>
			<CartButton />
		</div>
	);
};

export default ProductDetailsNav;
