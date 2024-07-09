import { create } from "zustand";

type State = {
	activeItem: string;
	setActiveItem: (item: string) => void;
};

export const useItemsNav = create<State>((set) => ({
	activeItem: "shop",
	setActiveItem: (item) => set({ activeItem: item }),
}));
