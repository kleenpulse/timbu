import { ProductProps } from "@/lib/products";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

type CartProps = {
	products: ProductProps[];
	shipping: "door" | "station";
	total: number;
};
type StateProps = {
	cart: CartProps;
	addToCheckout: (cart: CartProps) => void;
	updateShipping: (shipping: "door" | "station") => void;
	removeFromCheckout: (product: ProductProps) => void;
	updateQuantity: (productId: ProductProps["id"], quantity: number) => void;
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

export const useCheckout = create<StateProps>()(
	persist(
		(set) => ({
			cart: {
				products: [],
				shipping: "door",
				total: 0,
			},

			addToCheckout: (cart) =>
				set((state) => {
					const existingProducts = state.cart.products.map(
						(product) => product.id
					);
					const newProducts = cart.products.filter(
						(product) => !existingProducts.includes(product.id)
					);
					const updatedProducts = [...state.cart.products, ...newProducts];
					const updatedCart = {
						...state.cart,
						products: updatedProducts,
						total: cart.total,
					};
					return { cart: updatedCart };
				}),

			updateShipping: (shipping) =>
				set((state) => ({ cart: { ...state.cart, shipping } })),
			removeFromCheckout: (product) =>
				set((state) => ({
					cart: {
						...state.cart,
						products: state.cart.products.filter((p) => p.id !== product.id),
					},
				})),
			updateQuantity: (productId, quantity) => {
				set((state) => {
					if (!state.cart.products) return state;
					return {
						cart: {
							...state.cart,
							products: state.cart.products.map((product) =>
								product.id === productId
									? { ...product, item_count: quantity }
									: product
							),
						},
					};
				});
			},
			clearCart: () =>
				set({ cart: { products: [], shipping: "door", total: 0 } }),
		}),
		{
			storage,
			name: "timbu_checkout",
		}
	)
);
