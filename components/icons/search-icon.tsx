import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
	children?: React.ReactNode;
	href?: string;
}

const SearchIcon = forwardRef<SVGSVGElement, SVGProps>(
	({ className, ...props }, ref) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				className={cn(className)}
				ref={ref}
				{...props}
			>
				<circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
				<path
					d="M20 20L17 17"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		);
	}
);

SearchIcon.displayName = "SearchIcon";
export default SearchIcon;
