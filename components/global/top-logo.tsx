import React from "react";
import TimbuIcon from "../icons/TimbuIcon";
import Link from "next/link";

const TopLogo = () => {
	return (
		<div className="flex w-full items-center justify-center gap-x-2 my-4 border-y border-gray-300 ">
			<Link href={"/"} className="border-x border-accent-border px-4 py-3">
				<TimbuIcon className="text-accent-border" />
			</Link>
		</div>
	);
};

export default TopLogo;
