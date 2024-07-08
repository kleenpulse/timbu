import type { Metadata } from "next";
import { Taviraj, Kanit } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/global/top-banner";
import TopLogo from "@/components/global/top-logo";
import Footer from "@/components/section/footer/footer";
import GotoTop from "@/components/miscellaneous/GotoTop";

const taviraj = Taviraj({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-taviraj",
});
const kanit = Kanit({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-kanit",
});

export const metadata: Metadata = {
	title: "Timbu Online Shop",
	description: "Timbu Online Shop",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={taviraj.variable}>
			<body className={kanit.className}>
				<div className="w-full mx-auto max-w-[1440px] relative text-accent-black">
					<TopBanner />
					<TopLogo />
					{children}
					<Footer />
				</div>
				<GotoTop />
			</body>
		</html>
	);
}
