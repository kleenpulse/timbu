import { create } from "zustand";

type StateProps = {
	navOpen: boolean;
	updateNavOpen: (value: boolean) => void;
};

export const useMobileNav = create<StateProps>()((set) => ({
	navOpen: false,
	updateNavOpen: (value) => set({ navOpen: value }),
}));
