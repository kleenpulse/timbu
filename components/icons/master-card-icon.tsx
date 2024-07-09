import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
	children?: React.ReactNode;
	href?: string;
}

const MasterCardIcon = forwardRef<SVGSVGElement, SVGProps>(
	({ className, ...props }, ref) => {
		return (
			<svg
				width="49"
				height="30"
				viewBox="0 0 49 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={cn(className)}
				ref={ref}
				{...props}
			>
				<g id="mastercard_symbol.svg" clipPath="url(#clip0_176_839)">
					<g id="Group">
						<g id="Group_2">
							<path
								id="Vector"
								d="M31.2697 3.20825H18.1289V26.7916H31.2697V3.20825Z"
								fill="#FF5F00"
							/>
							<path
								id="Vector_2"
								d="M18.9629 14.9999C18.9629 10.4166 21.0905 6.04159 24.6781 3.20826C18.1703 -1.91674 8.74233 -0.791738 3.61117 5.74993C-1.51999 12.2499 -0.393638 21.6666 6.15589 26.7916C11.6208 31.0833 19.2549 31.0833 24.7198 26.7916C21.0905 23.9583 18.9629 19.5833 18.9629 14.9999Z"
								fill="#EB001B"
							/>
							<path
								id="Vector_3"
								d="M48.9989 14.9999C48.9989 23.2916 42.2825 29.9999 33.9808 29.9999C30.6018 29.9999 27.3479 28.8749 24.7197 26.7916C31.2275 21.6666 32.3539 12.2499 27.2227 5.70826C26.4718 4.79159 25.6375 3.91659 24.7197 3.20826C31.2275 -1.91674 40.6972 -0.791738 45.7867 5.74993C47.8725 8.37493 48.9989 11.6249 48.9989 14.9999Z"
								fill="#F79E1B"
							/>
							<path
								id="Vector_4"
								d="M47.5811 24.2916V23.7916H47.7897V23.7083H47.2891V23.7916H47.4976V24.2916H47.5811ZM48.5406 24.2916V23.7083H48.3737L48.2068 24.125L48.04 23.7083H47.8731V24.2916H47.9982V23.8333L48.1651 24.2083H48.2903L48.4571 23.8333V24.2916H48.5406Z"
								fill="#F79E1B"
							/>
						</g>
					</g>
				</g>
				<defs>
					<clipPath id="clip0_176_839">
						<rect
							width="48.6"
							height="30"
							fill="white"
							transform="translate(0.399414)"
						/>
					</clipPath>
				</defs>
			</svg>
		);
	}
);

MasterCardIcon.displayName = "MasterCardIcon";
export default MasterCardIcon;
