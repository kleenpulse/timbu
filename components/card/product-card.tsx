import React from "react";
import BlurImage from "../miscellaneous/blur-image";
import StarIcon from "../icons/starIcon";
import { calculateDiscount, cn } from "@/lib/utils";
import { ProductProps } from "@/lib/products";
import { AnimatePresence, motion } from "framer-motion";

const ProductCard = ({
	id,
	title,
	image,
	discount_percentage,
	price,
	is_in_stock,
}: ProductProps) => {
	return (
		<motion.a
			href={`/${id}`}
			variants={{
				productCards: {
					opacity: 0,
					y: 30,
				},
				whileInView: {
					opacity: 1,
					y: 0,
				},
			}}
			transition={{
				type: "spring",
				mass: 3,
				stiffness: 200,
				damping: 30,
			}}
			layout
			layoutId={id}
			viewport={{ once: true }}
			className="w-full max-w-[340px] flex-col flex gap-y-2"
		>
			<div className="flex flex-col bg-accent-card items-center pb-4 md:pb-7">
				{is_in_stock ? (
					<span className="bg-accent-white w-fit px-2 py-1 md:px-3 self-start">
						Save {discount_percentage}%
					</span>
				) : (
					<span className="bg-accent-white w-fit px-2 py-1 md:px-3 self-start">
						Sold out
					</span>
				)}
				<BlurImage
					src={image}
					width={290}
					height={314}
					alt="product"
					className="max-w-[90%] w-full"
					draggable={false}
				/>
			</div>
			<div className="flex flex-col items-center gap-y-2">
				<p className="flex gap-x-1 ">
					{[1, 2, 3, 4, 5].map((item, index) => (
						<StarIcon
							key={item}
							className={cn(
								"text-accent-rating hover:text-accent-rating",
								index === 4 && "text-gray-300"
							)}
						/>
					))}
					<span>4 (5)</span>
				</p>
				<p>{title}</p>
				<p className="flex gap-x-2">
					<span className="line-through">${price}</span>
					<b className="text-accent-primary">
						${calculateDiscount({ price, discount_percentage })}
					</b>
				</p>
			</div>
		</motion.a>
	);
};

export default ProductCard;
