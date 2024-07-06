import React from "react";
import BlurImage from "../miscellaneous/blur-image";

const NavBanner = () => {
	return (
		<div className="bg-accent-primary text-white sm:h-[150px] md:h-[189px] flex items-center justify-center overflow-hidden">
			<div className="flex items-center gap-x-6 ">
				<BlurImage src="/banner.webp" alt="banner" width={350} height={226} />
				<div className="flex flex-col  items-center">
					<h2 className="font-taviraj text-3xl lg:text-4xl xl:text-[44px]">
						Radiant beauty for every skin glow
					</h2>
					<p>Inclusive skincare for every complexion, from light to deep</p>
				</div>
			</div>
		</div>
	);
};

export default NavBanner;
