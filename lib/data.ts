type ItemsNavProps = {
	name: string;
	label: string;
	id: string;
};

export const ITEMS_NAV: ItemsNavProps[] = [
	{
		name: "shop",
		label: "Shop All",
		id: "1",
	},
	{
		name: "skincare",
		label: "Skincare",
		id: "2",
	},
	{
		name: "sets_kits",
		label: "Sets & kits",
		id: "3",
	},
	{
		name: "makeup",
		label: "Make-up",
		id: "4",
	},
];
type FooterLinkProps = {
	title: string;
	links: {
		title: string;
		url: string;
		id: number;
		isDisabled?: boolean;
		isInApp?: boolean;
	}[];
};

export const FOOTER_LINKS: FooterLinkProps[] = [
	{
		title: "Shop",
		links: [
			{
				title: "Skincare",
				url: "#",
				id: 1,
				isDisabled: true,
			},
			{
				title: "Sets & kits",
				url: "#",
				id: 2,
				isDisabled: true,
			},
			{
				title: "Make-up",
				url: "#",
				id: 3,
				isDisabled: true,
			},
			{
				title: "Shop by Concern",
				url: "#",
				id: 4,
				isDisabled: true,
			},
		],
	},
	{
		title: "Help",
		links: [
			{
				title: "FAQ",
				url: "#",
				id: 1,
				isDisabled: true,
			},
			{
				title: "Shipping",
				url: "/integration",
				id: 2,
				isInApp: true,
			},
			{
				title: "Refunds",
				url: "#",
				id: 3,
				isDisabled: true,
			},
		],
	},
	{
		title: "Learn",
		links: [
			{
				title: "About Us",
				url: "#",

				id: 1,
			},
			{
				title: "Blog",
				url: "#",
				id: 2,
			},
			{
				title: "Career",
				url: "#",
				id: 3,
				isDisabled: true,
			},
		],
	},
];
