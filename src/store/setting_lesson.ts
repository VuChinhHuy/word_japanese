import { create } from "zustand";

interface SettingLesson {
	selectedLesson: string;
	setSelectedLesson: (lessonKey: string) => void;
}
export const useLesson = create<SettingLesson>((set) => ({
	selectedLesson: "",
	setSelectedLesson: (lessonKey: string) => {
		set({ selectedLesson: lessonKey });
	},
}));
