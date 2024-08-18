import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

interface SettingLesson {
	selectedLesson: string;
	isTest: boolean;
	setSelectedLesson: (lessonKey: string) => void;
	setIsTest: (test: boolean) => void;
}
export const useLesson = createWithEqualityFn<SettingLesson>((set) => ({
	selectedLesson: "",
	isTest: false,
	setSelectedLesson: (lessonKey: string) => {
		set({ selectedLesson: lessonKey });
	},
	setIsTest: (test: boolean)=>{
		set({isTest: test})
	}
}),shallow);
