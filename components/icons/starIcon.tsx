import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
	children?: React.ReactNode;
	href?: string;
}

const StarIcon = forwardRef<SVGSVGElement, SVGProps>(
	({ className, ...props }, ref) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="22"
				viewBox="0 0 24 22"
				fill="none"
				className={cn(className)}
				ref={ref}
				{...props}
			>
				<path
					d="M11.625 0L14.3192 8.2918H23.0377L15.9843 13.4164L18.6784 21.7082L11.625 16.5836L4.57158 21.7082L7.26574 13.4164L0.212322 8.2918H8.93083L11.625 0Z"
					fill="currentColor"
				/>
			</svg>
		);
	}
);

StarIcon.displayName = "StarIcon";
export default StarIcon;
