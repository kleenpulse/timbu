import { cn } from "@/lib/utils";

const TopBanner = () => {
	return (
		<div
			className={cn(
				"pointer-events-none flex w-full items-center justify-center gap-x-2 transition-all md:gap-x-5 py-2 md:py-[14px] bg-accent-white"
			)}
		>
			<p className="text-xs  min-[500px]:text-sm md:text-lg text-accent-black">
				FREE SHIPPING ON EVERY PRODUCT FROM THE 22ND OF JULY
			</p>
		</div>
	);
};

export default TopBanner;
