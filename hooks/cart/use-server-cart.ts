import { ProductData } from "@/types/products.types";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

type StateProps = {
	cart: ProductData[];

	addToCart: (product: ProductData) => void;
	removeFromCart: (product: ProductData) => void;
	updateQuantity: (productId: ProductData["id"], quantity: number) => void;
	clearCart: () => void;
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

export const useCart = create<StateProps>()(
	persist(
		(set) => ({
			cart: [],
			addToCart: (product) =>
				set((state) => ({
					cart: [...state.cart, product],
				})),
			removeFromCart: (product) =>
				set((state) => ({
					cart: state.cart.filter((p) => p.id !== product.id),
				})),
			updateQuantity: (productId, quantity) => {
				set((state) => {
					if (!state.cart) return state;
					return {
						cart: state.cart.map((product) =>
							product.id === productId
								? { ...product, item_count: quantity }
								: product
						),
					};
				});
			},
			clearCart: () => set({ cart: [] }),
		}),
		{
			storage,
			name: "server_timbu_cart",
		}
	)
);
