export interface ProductData {
	available_quantity: number;
	buying_price: number | null;
	categories: string[];
	current_price: CurrencyPrice[];
	date_created: string;
	description: string;
	discounted_price: number | null;
	extra_infos: unknown | null;
	id: string;
	is_available: boolean;
	is_deleted: boolean;
	is_service: boolean;
	last_updated: string;
	name: string;
	organization_id: string;
	parent: unknown | null;
	parent_product_id: string | null;
	photos: Photo[];
	previous_url_slugs: unknown | null;
	product_image: unknown[];
	selling_price: number | null;
	unavailable: boolean;
	unavailable_end: string | null;
	unavailable_start: string | null;
	unique_id: string;
	url_slug: string;
	user_id: string;
}

interface CurrencyPrice {
	USD: number[];
}

interface Photo {
	file_rename: boolean;
	filename: string;
	is_featured: boolean;
	is_public: boolean;
	model_id: string;
	model_name: string;
	organization_id: string;
	position: number;
	save_as_jpg: boolean;
	url: string;
}
