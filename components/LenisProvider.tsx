"use client";

import { ReactLenis, useLenis } from "lenis/react";

function LenisProvider({ children }: { children: React.ReactNode }) {
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	});

	return <ReactLenis root>{children}</ReactLenis>;
}

export default LenisProvider;
