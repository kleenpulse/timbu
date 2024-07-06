import React from "react";
import TimbuIcon from "../icons/TimbuIcon";

const TopLogo = () => {
	return (
		<div className="flex w-full items-center justify-center gap-x-2 my-4 border-y border-gray-300 ">
			<p className="border-x border-accent-border px-4 py-3">
				<TimbuIcon className="text-accent-border" />
			</p>
		</div>
	);
};

export default TopLogo;
