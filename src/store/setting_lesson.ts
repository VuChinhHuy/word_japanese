import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

interface SettingLesson {
	selectedLesson: string;
	isTest: boolean;
	isMatching: boolean;
	setSelectedLesson: (lessonKey: string) => void;
	setIsTest: (test: boolean) => void;
	setIsMatching: (matching: boolean) => void;
}
export const useLesson = createWithEqualityFn<SettingLesson>(
	(set, get) => ({
		selectedLesson: "",
		isTest: false,
		isMatching: false,
		setSelectedLesson: (lessonKey: string) => {
			set({ selectedLesson: lessonKey });
		},
		setIsTest: (test: boolean) => {
			if (get().isMatching && test)
				set({ isTest: test, isMatching: !test });
			else set({ isTest: test });
		},
		setIsMatching: (matching: boolean) => {
			if (get().isTest && matching)
				set({
					isMatching: matching,
					isTest: !matching,
				});
			else set({ isMatching: matching });
		},
	}),
	shallow
);
