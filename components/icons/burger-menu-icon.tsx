import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
	children?: React.ReactNode;
	href?: string;
}

const BurgerMenuIcon = forwardRef<SVGSVGElement, SVGProps>(
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
					d="M5 7H19"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M5 12H19"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M5 17H19"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		);
	}
);

BurgerMenuIcon.displayName = "BurgerMenuIcon";
export default BurgerMenuIcon;
