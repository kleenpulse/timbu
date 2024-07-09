import { cn } from "@/lib/utils";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import CartButton from "../shared/cart-button";
import BackButton from "../shared/back-button";

const ProductDetailsNav = ({ className }: { className?: string }) => {
	const router = useRouter();

	return (
		<div
			className={cn("flex items-center justify-between w-full mb-8", className)}
		>
			<BackButton />
			<CartButton />
		</div>
	);
};

export default ProductDetailsNav;
