import React from "react";
import BlurImage from "../miscellaneous/blur-image";

const NavBanner = () => {
	return (
		<div className="bg-accent-primary text-white min-[680px]:h-[189px] flex items-center justify-center overflow-hidden">
			<div className="flex items-center gap-6 w-full flex-col-reverse pt-4 sm:pt-0 min-[680px]:flex-row">
				<BlurImage src="/banner.webp" alt="banner" width={350} height={226} />
				<div className="flex flex-col  items-center px-2">
					<h2 className="font-taviraj text-2xl min-[600px]:text-3xl lg:text-4xl xl:text-[44px] text-center">
						Radiant beauty for every skin glow
					</h2>
					<p className="text-center text-sm sm:text-base">
						Inclusive skincare for every complexion, from light to deep
					</p>
				</div>
			</div>
		</div>
	);
};

export default NavBanner;
