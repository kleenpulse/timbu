/* eslint-disable react-hooks/exhaustive-deps */

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React, {
	Dispatch,
	FormEvent,
	SetStateAction,
	useEffect,
	useState,
	useTransition,
} from "react";

const Subscribe = ({ className }: { className?: string }) => {
	const [isPending, startTransition] = useTransition();
	const [text, setText] = useState("");

	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className={cn("flex flex-col", className)}
		>
			<div className="flex items-center  lg:h-[48px]">
				<input
					className="h-full w-full   bg-secondary px-4 py-3 max-sm:max-w-[200px]x  placeholder:text-accent-black outline-none focus-within:outline focus-within:outline-accent-primary"
					placeholder="Enter your mail"
					value={text}
					onChange={(e) => setText(e.target.value)}
					required
					type="email"
					id="email"
				/>
				<button
					className={cn(
						"flex items-center justify-center gap-x-4  border-none bg-accent-border px-5 py-3 text-xs text-white md:px-8 xl:px-16 sm:text-base whitespace-nowrap w-fit",
						isPending
							? "size-10 cursor-not-allowed md:size-14"
							: "h-full w-fit cursor-pointer sm:px-6 md:py-4"
					)}
				>
					{isPending ? <Loader2 className="animate-spin" /> : "Sign up"}
				</button>
			</div>
		</form>
	);
};

export default Subscribe;
