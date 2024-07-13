import { ProductData, ServerProducts } from "@/types/products.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProduct = (id: string) => {
	return useQuery({
		queryKey: ["timbu_product"],
		queryFn: () => getProductById(id) as unknown as () => ServerProducts,
	});
};
const URL = process.env.NEXT_PUBLIC_SINGLE_PRODUCT_URL;
const API_KEY = process.env.NEXT_PUBLIC_TIMBU_API_KEY;
const APP_ID = process.env.NEXT_PUBLIC_TIMBU_APP_ID;
const ORG_ID = process.env.NEXT_PUBLIC_TIMBU_ORG_ID;
async function getProductById(id: string) {
	const response = await axios.get(
		`${URL}/${id}?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}&limit=100&reverse_sort=false`
	);
	return response.data;
}
