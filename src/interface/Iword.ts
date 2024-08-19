export interface Iword {
	name: string;
	sound: string;
	character: { hiragana: string |null; katakana: string|null; kanji: string|null };
	note?: string 
}
