import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

type StateProps = {
	availability: string;
	price: string;
	updateAvailability: (value: string) => void;
	updatePrice: (value: string) => void;
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
	removeItem: (name) => {
		localStorage.removeItem(name);
	},
};

export const useFilters = create<StateProps>()(
	persist(
		(set) => ({
			availability: "availability",
			price: "price",
			updateAvailability: (value) => set({ availability: value }),
			updatePrice: (value) => set({ price: value }),
		}),
		{
			name: "filters",
			storage,
		}
	)
);
