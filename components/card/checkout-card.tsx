import BlurImage from "../miscellaneous/blur-image";
import { ProductProps } from "@/lib/products";
import { calculateDiscount } from "@/lib/utils";
import { useCheckout } from "@/hooks/cart/use-checkout";
import NumericInputCheckout from "../shared/numeric-input-checkout";

const CheckoutCard = ({
	image,
	title,
	price,
	discount_percentage,
	id,
}: ProductProps) => {
	const { cart } = useCheckout();
	const discount_price = calculateDiscount({ price, discount_percentage });
	const handleItemRemove = () => {
		const new_price = cart.total - discount_price;
		const newCart = cart.products.filter((item) => item.id !== id);
		useCheckout.setState({
			cart: { ...cart, products: newCart, total: new_price },
		});
	};

	return (
		<div className="w-full flex items-center justify-between max-w-[757px] px-2">
			<div className="flex gap-x-2 lg:gap-x-4 items-center">
				<div className="flex flex-col bg-accent-card items-center p-2 max-h-[172px] max-w-[146px]">
					<BlurImage
						src={image}
						width={146}
						height={172}
						alt="product"
						className="max-w-[90%] w-full"
						draggable={false}
						quality={100}
					/>
				</div>
				<div className="flex flex-col gap-y-4 items-start">
					<p className="md:text-xl lg:text-2xl">{title}</p>
					<NumericInputCheckout id={id} should_disable={false} />
					<button
						className="text-accent-orange md:text-lg"
						onClick={handleItemRemove}
					>
						Remove
					</button>
				</div>
			</div>
			<p className="sm:text-2xl font-bold">
				${calculateDiscount({ price, discount_percentage })}
			</p>
		</div>
	);
};

export default CheckoutCard;
