import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
	children?: React.ReactNode;
	href?: string;
}

const VisaCardIcon = forwardRef<SVGSVGElement, SVGProps>(
	({ className, ...props }, ref) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="66"
				height="22"
				viewBox="0 0 66 22"
				fill="none"
				className={cn(className)}
				ref={ref}
				{...props}
			>
				<g clipPath="url(#clip0_176_837)">
					<path
						d="M42.8197 0.523987C38.2246 0.523987 34.099 2.91498 34.099 7.30257C34.099 12.3557 41.3868 12.7008 41.3868 15.215C41.3868 16.275 40.1516 17.2363 38.0764 17.2363C35.1119 17.2363 32.8884 15.9052 32.8884 15.9052L31.9497 20.3421C31.9497 20.3421 34.4942 21.476 37.9035 21.476C42.9432 21.476 46.8959 18.9864 46.8959 14.5002C46.8959 9.17593 39.5834 8.83084 39.5834 6.48914C39.5834 5.65106 40.5963 4.73904 42.6714 4.73904C45.0184 4.73904 46.9453 5.70036 46.9453 5.70036L47.8841 1.41137C47.8594 1.41137 45.7595 0.523987 42.8197 0.523987ZM0.723132 0.844429L0.599609 1.48531C0.599609 1.48531 2.52656 1.83041 4.28059 2.54524C6.5287 3.35867 6.67693 3.82701 7.0722 5.28132L11.1979 21.1309H16.7317L25.2053 0.844429H19.6962L14.2365 14.6481L12.0131 2.93963C11.8155 1.60856 10.7779 0.844429 9.49324 0.844429H0.723132ZM27.4287 0.844429L23.1054 21.1309H28.3675L32.6661 0.844429H27.4287ZM56.7283 0.844429C55.4684 0.844429 54.8014 1.50996 54.3073 2.69313L46.5995 21.1309H52.1086L53.1709 18.0497H59.8905L60.5328 21.1309H65.3996L61.1751 0.844429H56.7283ZM57.4448 6.34125L59.0753 13.9579H54.7026L57.4448 6.34125Z"
						fill="#1434CB"
					/>
				</g>
				<defs>
					<clipPath id="clip0_176_837">
						<rect
							width="64.8"
							height="20.952"
							fill="white"
							transform="translate(0.599609 0.523987)"
						/>
					</clipPath>
				</defs>
			</svg>
		);
	}
);

VisaCardIcon.displayName = "VisaCardIcon";
export default VisaCardIcon;
