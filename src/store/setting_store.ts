import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

interface SettingState {
	modeTheme: "light" | "dark";
	kanji: boolean;
	beforeVi: boolean;
	isLikeList: boolean;
	isLearnedList: boolean;
	getSetting: () => void;
	toggleModeTheme: (mode: "light" | "dark") => void;
	setKanji: (isKanji: boolean) => void;
	setBeforeVi: (before: boolean) => void;
	setIsLikeList: (like: boolean) => void;
	setIsLearnedList: (learned: boolean) => void;
}
export const useSetting = createWithEqualityFn<SettingState>((set, get) => ({
	modeTheme: "light",
	kanji: true,
	beforeVi: true,
	isLearnedList: false,
	isLikeList: false,
	getSetting: () => {
		const mode = localStorage.getItem("modeTheme");
		get().toggleModeTheme(!mode || mode == "dark" ? "dark" : "light");
		const isKanji = localStorage.getItem("kanji");
		get().setKanji(isKanji || isKanji == "kanji" ? true : false);
		const beforeVi = localStorage.getItem("beforeVi");
		get().setBeforeVi(beforeVi || beforeVi === "beforeVi" ? true : false);
		const like = localStorage.getItem("like");
		get().setIsLikeList(like || like === "like" ? true : false);
		const learned = localStorage.getItem("learned");
		get().setIsLearnedList(learned || learned === "learned" ? true : false);
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
	setIsLearnedList: (learned: boolean) => {
		set({ isLearnedList: learned });
		if (learned) {
			localStorage.setItem("learned", "learned");
		} else {
			localStorage.removeItem("learned");
		}
	},
	setIsLikeList: (like: boolean) => {
		set({ isLikeList: like });
		if (like) {
			localStorage.setItem("like", "like");
		} else {
			localStorage.removeItem("like");
		}
	},
	
}),shallow);
