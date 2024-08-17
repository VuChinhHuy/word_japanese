import { create } from "zustand";

interface SettingState {
	modeTheme: "light" | "dark";
	kanji: boolean;
	beforeVi: boolean;
	getSetting: () => void;
	toggleModeTheme: (mode: "light" | "dark") => void;
	setKanji: (isKanji: boolean) => void;
	setBeforeVi: (before: boolean) => void;
}
export const useSetting = create<SettingState>((set, get) => ({
	modeTheme: "light",
	kanji: true,
	beforeVi: true,
	getSetting: () => {
		const mode = localStorage.getItem("modeTheme");
		get().toggleModeTheme(!mode || mode == "dark" ? "dark" : "light");
		const isKanji = localStorage.getItem("kanji");
		get().setKanji(isKanji || isKanji == "kanji" ? true : false);
		const beforeVi = localStorage.getItem("beforeVi");
		get().setBeforeVi(beforeVi || beforeVi === "beforeVi" ? true : false);
	},
	toggleModeTheme: (mode: "light" | "dark") => {
		set({ modeTheme: mode });
		localStorage.setItem("modeTheme", mode);
	},
	setKanji: (isKanji: boolean) => {
		set({ kanji: isKanji });
		if (isKanji) {
			localStorage.setItem("kanji", "kanji");
		} else {
			localStorage.removeItem("kanji");
		}
	},
	setBeforeVi: (before: boolean) => {
		set({ beforeVi: before });
		if (before) {
			localStorage.setItem("beforeVi", "beforeVi");
		} else {
			localStorage.removeItem("beforeVi");
		}
	},
}));
