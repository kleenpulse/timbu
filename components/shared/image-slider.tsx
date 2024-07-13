"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import type SwiperType from "swiper";
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlurImage from "../miscellaneous/blur-image";

const ImageSlider = ({ urls }: { urls: string[] }) => {
	const [swiper, setSwiper] = useState<null | SwiperType>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [slideConfig, setSlideConfig] = useState({
		isBeginning: true,
		isEnd: activeIndex === (urls.length ?? 0) - 1,
	});
	useEffect(() => {
		swiper?.on("slideChange", ({ activeIndex }) => {
			setActiveIndex(activeIndex);
			setSlideConfig({
				isBeginning: activeIndex === 0,
				isEnd: activeIndex === (urls.length ?? 0) - 1,
			});
		});
	}, [swiper, urls]);

	const className =
		"active:scale-[0.97] grid  hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-accent-border !text-white  border-zinc-300  backdrop-blur-xl";
	const inActiveStyles = "hidden text-white ";

	return (
		<div className="group relative  aspect-[3/4] overflow-hidden   ">
			<button
				onClick={(e) => {
					e.preventDefault();

					swiper?.slidePrev();
				}}
				className={cn(
					className,
					"left-3  absolute z-50 opacity-100 group-hover:opacity-100  text-white transition ",
					slideConfig.isBeginning ? inActiveStyles : "opacity-80"
				)}
			>
				<ChevronLeft aria-label="previous image" className="h-4 w-4 " />
			</button>
			<button
				onClick={(e) => {
					e.preventDefault();

					swiper?.slideNext();
				}}
				className={cn(
					className,
					"right-3   absolute z-50 opacity-100 group-hover:opacity-100 transition",
					slideConfig.isEnd ? inActiveStyles : "opacity-80"
				)}
			>
				<ChevronRight aria-label="next image" className="h-4 w-4 " />
			</button>

			<div className="w-full h-full ">
				<Swiper
					onSwiper={(swiper) => setSwiper(swiper)}
					autoplay
					spaceBetween={50}
					slidesPerView={1}
					modules={[Pagination]}
					className="h-full w-full"
					pagination={{
						renderBullet: (_, clasName) => {
							return `<span class='rounded-full transition !bg-accent-orange ${clasName}'></span>`;
						},
					}}
				>
					{urls.map((url, i) => (
						<SwiperSlide
							key={`product-image-${url}-${i}`}
							className="-z-10 relative h-full w-full "
						>
							<BlurImage
								fill
								loading="eager"
								src={url}
								alt="product image"
								className="h-full w-full object-cover object-center "
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ImageSlider;
