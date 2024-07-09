import { ProductProps } from "@/lib/products";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

type StateProps = {
	products: ProductProps[];
	addToProducts: (product: ProductProps[]) => void;
	removeFromProducts: (product: ProductProps) => void;
	updateQuantity: (productId: ProductProps["id"], quantity: number) => void;
	clearProducts: () => void;
};

const storage: PersistStorage<StateProps> = {
	getItem: (name) => {
		const str = localStorage.getItem(name);
		if (!str) return null;
		return JSON.parse(str);
	},
	setItem: (name, value) => {
		localStorage.setItem(name, JSON.stringify(value));
	},
	removeItem: (name) => localStorage.removeItem(name),
};

export const useProduct = create<StateProps>()(
	persist(
		(set) => ({
			products: [],
			addToProducts: (products) => set({ products }),
			removeFromProducts: (product) =>
				set((state) => ({
					products: state.products.filter((p) => p.id !== product.id),
				})),
			updateQuantity: (productId, quantity) => {
				set((state) => {
					if (!state.products) return state;
					return {
						products: state.products.map((product) =>
							product.id === productId
								? { ...product, item_count: quantity }
								: product
						),
					};
				});
			},
			clearProducts: () => set({ products: [] }),
		}),
		{
			storage,
			name: "timbu_product",
		}
	)
);
