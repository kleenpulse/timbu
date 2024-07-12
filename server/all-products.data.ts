import { ProductData } from "@/types/products.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProducts = () => {
	return useQuery({
		queryKey: ["timbu_products"],
		queryFn: getAllProducts as unknown as () => ProductData,
	});
};
const URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_TIMBU_API_KEY;
const APP_ID = process.env.NEXT_PUBLIC_TIMBU_APP_ID;
const ORG_ID = process.env.NEXT_PUBLIC_TIMBU_ORG_ID;
async function getAllProducts() {
	const response = await axios.get(
		`${URL}/products?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}&limit=100&reverse_sort=false`
	);
	return response.data;
}
