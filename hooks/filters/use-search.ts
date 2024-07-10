import { create } from "zustand";

type StateProps = {
	searchTerm: string;
	show_search: boolean;
	updateSearchTerm: (value: string) => void;
	updateShowSearch: (value: boolean) => void;
};

export const useSearch = create<StateProps>()((set) => ({
	searchTerm: "",
	show_search: false,
	updateShowSearch: (value: boolean) => set({ show_search: value }),
	updateSearchTerm: (value: string) => set({ searchTerm: value }),
}));
