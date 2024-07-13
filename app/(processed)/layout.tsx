"use client";
import {Suspense} from "react"


export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Suspense>{children}</Suspense>;
}
