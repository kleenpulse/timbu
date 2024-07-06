import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
	children?: React.ReactNode;
	href?: string;
}

const FilterIcon = forwardRef<SVGSVGElement, SVGProps>(
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
				<path
					d="M11 8L20 8"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M4 16L14 16"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<ellipse
					cx="7"
					cy="8"
					rx="3"
					ry="3"
					transform="rotate(90 7 8)"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<ellipse
					cx="17"
					cy="16"
					rx="3"
					ry="3"
					transform="rotate(90 17 16)"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		);
	}
);

FilterIcon.displayName = "FilterIcon";
export default FilterIcon;
