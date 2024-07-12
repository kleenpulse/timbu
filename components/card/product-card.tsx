import React from "react";
import BlurImage from "../miscellaneous/blur-image";
import StarIcon from "../icons/starIcon";
import { calculateDiscount, cn } from "@/lib/utils";
import { ProductProps } from "@/lib/products";
import { AnimatePresence, motion } from "framer-motion";
import { useSearch } from "@/hooks/filters/use-search";

const ProductCard = ({
	id,
	title,
	image,
	discount_percentage,
	price,
	is_in_stock,
}: ProductProps) => {
	const { updateSearchTerm, updateShowSearch, show_search, searchTerm } =
		useSearch();

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
			viewport={{ once: true }}
			className="w-full max-w-[340px] max-sm:max-w-[250px] flex-col flex gap-y-2 "
			layout
			layoutId={`product-card-${id}`}
		>
			<div className="flex flex-col bg-accent-card items-center pb-4 md:pb-7 hover:scale-95 transition hover:duration-300">
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
					className="max-w-[90%] w-full "
					draggable={false}
					quality={100}
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

				<span>
					{searchTerm.length > 1 ? (
						<span
							className={cn(
								"",
								searchTerm.length > 2 ? "w-[50px] overflow-x-auto" : ""
							)}
							dangerouslySetInnerHTML={{
								__html: title!.replace(
									new RegExp(`(${searchTerm})`, "gi"),
									(match, group) =>
										`<span  style="color: black; background-color: ${
											group.toLowerCase() === searchTerm.toLowerCase()
												? "yellow"
												: "inherit"
										}">${match}</span>`
								),
							}}
						/>
					) : (
						<span>{title}</span>
					)}
				</span>
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
