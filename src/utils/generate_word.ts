import { Iword } from "../interface/Iword";

export function generateWords(words: Iword[], numWord: number) {
	const resWords: Iword[] = [];
	let i = 0;
	while (i < numWord) {
		const wordRandom = words[Math.floor(Math.random() * words.length)];
		if (wordRandom && !resWords.includes(wordRandom)) {
			resWords.push(wordRandom);
			i++;
		}
	}
	return resWords;
}

export function generateMatchingWords(words: Iword[], isKanji: boolean) {
	const vis: string[] = words.map((word) =>
		isKanji ? `{ "word": "${word.name}"}` : word.name
	);
	const jps: string[] = words.map((word) => {
		if (isKanji) {
			return `{ "word": "${
				word.character.hiragana ?? word.character.katakana
			}", "kanji": "${word.character.kanji}" }`;
		}
		return word.character.hiragana ?? word.character.katakana ?? "";
	});
	const matchingWords = vis.concat(jps);
	const resultMatching: string[] = [];
	let i = 0;
	while (i < matchingWords.length) {
		const wordRandom =
			matchingWords[Math.floor(Math.random() * matchingWords.length)];
		if (wordRandom && !resultMatching.includes(wordRandom)) {
			resultMatching.push(wordRandom);
			i++;
		}
	}
	return resultMatching;
}

export const playAudio = (path: string, callback?: () => void): void => {
  const audio = new Audio(`./sounds/${path}.mp3`);
  if (callback) {
    audio.addEventListener('ended', callback);
  }
  audio.play();
};