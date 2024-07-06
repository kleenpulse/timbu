import Subscribe from "@/components/form/subcribe";
import TimbuIcon from "@/components/icons/TimbuIcon";
import { FOOTER_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import React from "react";

const Footer = () => {
	return (
		<footer className="flex flex-col w-full mt-10 lg:mt-16">
			<div className="flex w-full items-center justify-center gap-x-2 mt-4 border-y border-gray-300 ">
				<p className="border-x border-accent-border px-4 py-2">
					<TimbuIcon className="text-accent-border" />
				</p>
			</div>
			<div className="flex bg-accent-white py-10 xl:pt-[85px] xl:pb-[106px] px-2 sm:px-4 lg:px-8 xl:px-16 min-[1440px]:px-20 lg:py-16 ">
				<div className="flex w-full flex-col-reverse items-start justify-between gap-x-8 gap-y-16 min-[950px]:flex-row ">
					<div className="flex flex-col gap-y-6 min-[550px]:px-10 min-[950px]:max-w-[459px] min-[950px]:gap-y-8 min-[950px]:px-0">
						<div className="flex flex-col gap-y-3 ">
							<h3 className="text-lg  sm:text-xl xl:text-2xl">
								Join our Family
							</h3>
							<p className="text-xs   min-[550px]:text-sm sm:text-base xl:text-lg">
								You know you want to sign up for our newsletter and receive 10%
								off your first purchase! Be the first to hear about our new
								product launches, tips & tricks and juicy sales.
							</p>
						</div>
						<div className="flex flex-col gap-y-3 lg:gap-y-5">
							<Subscribe />
						</div>
					</div>
					<div className="grid w-fullx grid-cols-3 gap-x-4 min-[550px]:items-start min-[550px]:justify-center md:gap-x-8 lg:gap-x-12 xl:gap-x-16 min-[1440px]:gap-x-20">
						{FOOTER_LINKS.map((list, idx) => (
							<ul key={list.title} className="flex flex-col gap-y-2 md:gap-y-4">
								<span className="text-sm sm:text-xl xl:text-[22px]">
									{list.title}
								</span>
								{list.links.map((link, idx) => (
									<li
										key={idx}
										className={cn(
											"text-xs  sm:text-sm sm:font-normal md:text-base"
										)}
									>
										{true ? (
											link.title
										) : (
											<a
												href={link.url}
												target={link.isInApp ? "_self" : "_blank"}
												rel="noopener noreferrer"
											>
												{link.title}
											</a>
										)}
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
