import React from "react";

const PageTitle = ({ title, count }: { title: string; count?: number }) => {
	return (
		<h2 className="text-xl md:text-2xl font-medium ">
			{title} {count && count > 0 && <span>({count})</span>}
		</h2>
	);
};

export default PageTitle;
