export type ProductProps = {
	id: string;
	discount: string;
	discount_percentage: number;
	title: string;
	about: string;
	how_to_use: string;
	price: number;
	category: string;
	image: string;
	rating: number;
	is_in_stock?: boolean;
	item_count?: number;
};

export const PRODUCTS: ProductProps[] = [
	{
		id: "1",
		discount: "14%",
		title: "Lora Starter Kit",
		about:
			"The Lora Body Care Cream Set by RadiantGlow is a comprehensive skincare package designed to hydrate, nourish, and rejuvenate your skin. This set includes three different creams: a day cream, a night cream, and an all-over body lotion. Each product is formulated with natural ingredients to provide a luxurious and effective skincare experience.",
		how_to_use:
			"Apply the day cream, then the night cream, and then the all-over body lotion.",
		price: 100,
		category: "cream",
		image: "/product/product-1.png",
		discount_percentage: 14,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "2",
		discount: "10%",
		title: "Glow Beauty Set",
		about:
			"The Glow Beauty Set by RadiantGlow includes a rejuvenating face serum, an eye cream, and a hydrating moisturizer. Perfect for all skin types, this set aims to reduce fine lines and brighten your complexion.",
		how_to_use:
			"Start with the face serum, follow with the eye cream, and finish with the moisturizer.",
		price: 120,
		category: "skincare",
		image: "/product/product-2.png",
		discount_percentage: 10,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "3",
		discount: "20%",
		title: "Silky Smooth Hair Care",
		about:
			"The Silky Smooth Hair Care set by RadiantGlow is designed to give your hair a glossy, healthy finish. Includes a shampoo, conditioner, and a leave-in serum, all enriched with natural oils and vitamins.",
		how_to_use:
			"Use the shampoo and conditioner in the shower, then apply the leave-in serum on damp hair.",
		price: 150,
		category: "haircare",
		image: "/product/product-3.png",
		discount_percentage: 20,
		rating: 4,
		is_in_stock: false,
	},
	{
		id: "4",
		discount: "25%",
		title: "Radiant Facial Kit",
		about:
			"The Radiant Facial Kit by RadiantGlow is an all-in-one solution for a spa-like facial treatment at home. Includes a cleanser, toner, exfoliating scrub, and a brightening face mask.",
		how_to_use:
			"Cleanse your face with the cleanser, use the toner, exfoliate with the scrub, and apply the mask.",
		price: 130,
		category: "facial",
		image: "/product/product-4.png",
		discount_percentage: 25,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "5",
		discount: "18%",
		title: "Nourishing Body Lotion",
		about:
			"The Nourishing Body Lotion by RadiantGlow is a hydrating lotion that provides long-lasting moisture and a silky-smooth feel. Infused with natural extracts to keep your skin soft and supple.",
		how_to_use: "Apply generously over the body, focusing on dry areas.",
		price: 145,
		category: "skincare",
		image: "/product/product-5.png",
		discount_percentage: 18,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "6",
		discount: "12%",
		title: "Bright Eyes Kit",
		about:
			"The Bright Eyes Kit by RadiantGlow targets dark circles and puffiness with an eye serum and an eye mask. Formulated with caffeine and hyaluronic acid to brighten and hydrate the delicate eye area.",
		how_to_use:
			"Apply the eye serum first, then use the eye mask for a refreshing treatment.",
		price: 815,
		category: "eyecare",
		image: "/product/product-6.png",
		discount_percentage: 12,
		rating: 4,
		is_in_stock: false,
	},
	{
		id: "7",
		discount: "15%",
		title: "Ultimate Lip Care Set",
		about:
			"The Ultimate Lip Care Set by RadiantGlow includes a lip scrub, a hydrating lip balm, and a lip plumper. Designed to exfoliate, hydrate, and enhance your lips.",
		how_to_use:
			"Use the lip scrub to exfoliate, apply the lip balm for hydration, and finish with the lip plumper.",
		price: 620,
		category: "skincare",
		image: "/product/product-7.png",
		discount_percentage: 15,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "8",
		discount: "22%",
		title: "Anti-Aging Skincare Set",
		about:
			"The Anti-Aging Skincare Set by RadiantGlow is designed to reduce the appearance of wrinkles and fine lines. Includes an anti-aging serum, a night cream, and a retinol moisturizer.",
		how_to_use:
			"Apply the anti-aging serum first, follow with the night cream before bed, and use the retinol moisturizer daily.",
		price: 200,
		category: "anti-aging",
		image: "/product/product-8.png",
		discount_percentage: 22,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "9",
		discount: "30%",
		title: "Revitalizing Hand Cream",
		about:
			"The Revitalizing Hand Cream by RadiantGlow is a nourishing formula that keeps your hands soft and smooth. Perfect for daily use, this cream is enriched with shea butter and aloe vera.",
		how_to_use:
			"Apply a small amount to your hands and massage in until fully absorbed.",
		price: 225,
		category: "cream",
		image: "/product/product-9.png",
		discount_percentage: 30,
		rating: 4,
		is_in_stock: false,
	},
	{
		id: "10",
		discount: "28%",
		title: "Soothing Foot Care Kit",
		about:
			"The Soothing Foot Care Kit by RadiantGlow includes a foot scrub, a hydrating foot cream, and a pair of moisturizing socks. Ideal for pampering and treating tired feet.",
		how_to_use:
			"Use the foot scrub to exfoliate, apply the foot cream, and wear the moisturizing socks overnight.",
		price: 760,
		category: "footcare",
		image: "/product/product-10.png",
		discount_percentage: 28,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "11",
		discount: "16%",
		title: "Daily Sun Protection",
		about:
			"The Daily Sun Protection set by RadiantGlow includes a lightweight sunscreen and an after-sun cooling gel. Protects your skin from harmful UV rays while providing a soothing effect post-sun exposure.",
		how_to_use:
			"Apply the sunscreen before sun exposure and use the cooling gel after.",
		price: 650,
		category: "suncare",
		image: "/product/product-11.png",
		discount_percentage: 16,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "12",
		discount: "14%",
		title: "Hydrating Mist Spray",
		about:
			"The Hydrating Mist Spray by RadiantGlow is a refreshing facial mist that hydrates and revitalizes your skin. Perfect for a quick moisture boost throughout the day.",
		how_to_use:
			"Spray evenly over your face from a distance and let it absorb.",
		price: 535,
		category: "mist",
		image: "/product/product-12.png",
		discount_percentage: 14,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "13",
		discount: "19%",
		title: "Deep Cleansing Kit",
		about:
			"The Deep Cleansing Kit by RadiantGlow includes a gentle facial cleanser, a purifying clay mask, and a toner. This set is designed to deeply cleanse pores and remove impurities for a clearer complexion.",
		how_to_use:
			"Cleanse your face with the facial cleanser, apply the clay mask for 15 minutes, and finish with the toner.",
		price: 210,
		category: "cleansing",
		image: "/product/product-1.png",
		discount_percentage: 19,
		rating: 4,
		is_in_stock: false,
	},
	{
		id: "14",
		discount: "15%",
		title: "Hydration Boost Serum",
		about:
			"The Hydration Boost Serum by RadiantGlow is a lightweight serum that provides intense hydration. Formulated with hyaluronic acid and aloe vera to leave your skin plump and refreshed.",
		how_to_use:
			"Apply a few drops to your face and neck, and gently massage into the skin.",
		price: 470,
		category: "serum",
		image: "/product/product-2.png",
		discount_percentage: 15,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "15",
		discount: "25%",
		title: "Exfoliating Body Scrub",
		about:
			"The Exfoliating Body Scrub by RadiantGlow removes dead skin cells and reveals smoother, softer skin. Infused with natural exfoliants and essential oils for a luxurious experience.",
		how_to_use:
			"Massage onto damp skin in circular motions and rinse off with warm water.",
		price: 525,
		category: "bodycare",
		image: "/product/product-3.png",
		discount_percentage: 25,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "16",
		discount: "12%",
		title: "Brightening Vitamin C Cream",
		about:
			"The Brightening Vitamin C Cream by RadiantGlow brightens and evens out skin tone. Packed with Vitamin C and antioxidants to combat dullness and hyperpigmentation.",
		how_to_use: "Apply to clean skin in the morning and evening.",
		price: 915,
		category: "cream",
		image: "/product/product-4.png",
		discount_percentage: 12,
		rating: 4,
		is_in_stock: false,
	},
	{
		id: "17",
		discount: "20%",
		title: "Relaxing Bath Set",
		about:
			"The Relaxing Bath Set by RadiantGlow includes bath salts, a bubble bath, and a soothing bath oil. Perfect for unwinding and pampering yourself after a long day.",
		how_to_use:
			"Add bath salts or bubble bath to warm water, and finish with a few drops of bath oil.",
		price: 380,
		category: "bath",
		image: "/product/product-5.png",
		discount_percentage: 20,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "18",
		discount: "18%",
		title: "Detoxifying Charcoal Mask",
		about:
			"The Detoxifying Charcoal Mask by RadiantGlow deeply cleanses and detoxifies the skin. Charcoal and clay work together to draw out impurities and leave your skin feeling refreshed.",
		how_to_use:
			"Apply an even layer to clean skin, leave on for 10-15 minutes, and rinse off.",
		price: 540,
		category: "mask",
		image: "/product/product-6.png",
		discount_percentage: 18,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "19",
		discount: "22%",
		title: "Nourishing Hair Oil",
		about:
			"The Nourishing Hair Oil by RadiantGlow provides deep nourishment and shine. Made with a blend of natural oils to strengthen and protect your hair.",
		how_to_use:
			"Apply a small amount to damp or dry hair, focusing on the ends.",
		price: 530,
		category: "haircare",
		image: "/product/product-7.png",
		discount_percentage: 22,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "20",
		discount: "15%",
		title: "Firming Body Cream",
		about:
			"The Firming Body Cream by RadiantGlow helps to tone and firm the skin. Enriched with collagen and caffeine to improve skin elasticity and texture.",
		how_to_use:
			"Massage into the skin in upward circular motions until fully absorbed.",
		price: 735,
		category: "bodycare",
		image: "/product/product-8.png",
		discount_percentage: 15,
		rating: 4,
		is_in_stock: false,
	},
	{
		id: "21",
		discount: "20%",
		title: "Soothing Aloe Vera Gel",
		about:
			"The Soothing Aloe Vera Gel by RadiantGlow provides instant relief for dry and irritated skin. Perfect for sunburns, insect bites, and everyday hydration.",
		how_to_use: "Apply generously to affected areas and let it absorb.",
		price: 230,
		category: "gel",
		image: "/product/product-9.png",
		discount_percentage: 20,
		rating: 4,
		is_in_stock: true,
	},
	{
		id: "22",
		discount: "14%",
		title: "Clarifying Acne Treatment",
		about:
			"The Clarifying Acne Treatment by RadiantGlow targets blemishes and prevents breakouts. Contains salicylic acid and tea tree oil to keep your skin clear and healthy.",
		how_to_use: "Apply a small amount to affected areas once or twice daily.",
		price: 165,
		category: "treatment",
		image: "/product/product-10.png",
		discount_percentage: 14,
		rating: 4,
		is_in_stock: true,
	},
];
