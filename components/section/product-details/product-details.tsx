import StarIcon from "@/components/icons/starIcon";
import BlurImage from "@/components/miscellaneous/blur-image";
import { ProductProps } from "@/lib/products";
import { calculateDiscount, cn } from "@/lib/utils";
import MoreProductDetails from "./more-product-details";
import { useCart } from "@/hooks/cart/use-cart";
import NumericInput from "../../shared/numeric-input";

const ProductDetails = ({ data }: { data: ProductProps }) => {
	const { addToCart, cart } = useCart();
	const isInCart = cart.some((item) => item.id === data.id);
	const handleAddToCart = () => {
		addToCart(data);
	};

	return (
		<div className="w-full flex flex-col items-center md:items-start sm:gridx md:flex-row sm:justify-center xl:gap-x-20 grid-cols-2 gap-8 mt-4 place-items-center">
			<div className="w-full max-w-[506px] bg-accent-card px-[42px] py-[49px] md:sticky top-0 min-[1320px]:w-[506px]">
				<BlurImage
					src={data.image}
					alt={data.title}
					width={506}
					height={618}
					className="w-full h-full"
				/>
			</div>
			<div className="flex flex-col gap-y-5 w-full max-w-[624px]">
				<div className="flex items-center gap-x-10">
					<span className="bg-accent-white px-4 py-2 sm:px-8 xl:px-12">
						Sales
					</span>
					<p className="flex gap-x-1 ">
						{Array.from({ length: 5 }).map((_, index) => (
							<StarIcon
								key={index}
								className={cn(
									"text-accent-rating hover:text-accent-rating",
									index === 4 && "text-gray-300"
								)}
							/>
						))}
						<span>4 (5)</span>
					</p>
				</div>
				<div className="flex flex-col sm:flex-row items-center gap-x-8">
					<div className="flex items-center gap-x-2 sm:gap-x-8 max-sm:w-full max-sm:justify-between">
						{" "}
						<p>{data.title}</p>
						<p className="flex gap-x-2">
							<span className="line-through">${data.price}</span>
							<b className="text-accent-primary">
								$
								{calculateDiscount({
									price: data.price,
									discount_percentage: data.discount_percentage,
								})}
							</b>
						</p>
					</div>
					{data.is_in_stock ? (
						<p>(You just saved ${data.discount_percentage})</p>
					) : (
						<p className="text-red-500">Out of Stock</p>
					)}
				</div>

				{/* TODO: Add Product To Cart */}
				<div className="flex items-center gap-x-5 h-[50px]">
					<NumericInput
						id={data.id}
						should_disable={!data.is_in_stock || isInCart}
					/>
					<button
						type="button"
						disabled={!data.is_in_stock || isInCart}
						onClick={handleAddToCart}
						className="w-full bg-accent-orange text-white py-2 px-4 lg:py-3  disabled:bg-accent-white disabled:text-accent-black disabled:opacity-70 disabled:border disabled:border-accent-primary disabled:cursor-not-allowed active:scale-95 transition disabled:scale-100 h-full"
					>
						{!isInCart && data.is_in_stock
							? "Add To Cart"
							: isInCart
							? "Added to Cart"
							: "Out of Stock"}
					</button>
				</div>
				<MoreProductDetails data={data} />
			</div>
		</div>
	);
};

export default ProductDetails;
