import { useCallback, useEffect, useMemo, useState } from "react";
import { Iword } from "../interface/Iword";
import { useLesson } from "../store/setting_lesson";
import { LessonCollection } from "../constants/data_word";
import { generateMatchingWords, generateWords, playAudio } from "../utils/generate_word";
import { useSetting } from "../store/setting_store";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import BackgroundDialog from "./background_dialog";

export default function PracticeMatching() {
  const { selectedLesson, setIsMatching } = useLesson((state) => ({
    selectedLesson: state.selectedLesson,
    setIsMatching: state.setIsMatching
  }));
  const { kanji } = useSetting((state) => ({
    kanji: state.kanji,
  }));

  const [lessonWord, setLessonWord] = useState<Iword[]>([]);
  const [wordsGame, setWordsGame] = useState<string[]>([]);
  const [words, setWords] = useState<Iword[]>([]);
  const [indexCorrect, setIndexCorrect] = useState<number[]>([]);
  const [numGame, setNumGame] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [stIndex, setStIndex] = useState<number | null>(null);

  useMemo(() => {
    const word = LessonCollection.get(selectedLesson);
    if (word && word.length > 0) {
      setLessonWord(generateWords(word, word.length));
      setStIndex(null);
      setEndGame(false);
    }
  }, [selectedLesson]);

  useEffect(() => {
    setWordsGame(generateMatchingWords(words, kanji));
  }, [words, kanji]);

  useEffect(() => {
    if (indexCorrect.length === 20 || numGame === 0) {
      setIndexCorrect([]);
      setWords(lessonWord.slice(numGame *10 , numGame * 10 + 10));
      setNumGame(numGame + 1);
    }
  }, [indexCorrect, lessonWord, numGame]);

  useEffect(() => {
    if (numGame > Math.floor(lessonWord.length / 10) ) {
      setEndGame(true);
      playAudio('congratulations')
    }
  }, [numGame, lessonWord.length]);

  const clickWord = useCallback((index: number) => {
    if (index === stIndex) return;
    if (stIndex === null) {
      setStIndex(index);
      return;
    }
    const word1 = wordsGame[stIndex];
    const word2 = wordsGame[index];
    const checked = checkWord(word1, word2);
    if (checked) {
      setIndexCorrect([...indexCorrect, stIndex, index]);
      playAudio('good')
    }
    else playAudio('wrong')
    setStIndex(null);
  }, [stIndex, wordsGame, indexCorrect]);

  const checkWord = useCallback((word1: string, word2: string) => {
    if (!kanji) {
      const findWord = words.find(word => (word.name === word1 && (word.character.hiragana ?? word.character.katakana) === word2) || (word.name === word2 && (word.character.hiragana ?? word.character.katakana) === word1));
      return findWord ? true : false;
    }
    const findWord = words.find(word => (word.name === JSON.parse(word1).word && (word.character.hiragana ?? word.character.katakana) === JSON.parse(word2).word) || (word.name === JSON.parse(word2).word && (word.character.hiragana ?? word.character.katakana) === JSON.parse(word1).word));
    return findWord ? true : false;
  }, [words, kanji]);

  return (
    <div className="flex flex-col h-full w-full p-2 xl:p-8 justify-around items-center">
      <div className='flex flex-row w-full justify-start items-start'>
        <button onClick={() => setIsMatching(false)} type="button" className={clsx(
          'h-12 w-12 justify-between leading-5 font-semibold bg-teal-900/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5')}>
          <ArrowUturnLeftIcon className='size-9' />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-2 h-full w-full mt-2">
        {wordsGame.map((word, index) => {
          const corrected = indexCorrect.includes(index);
          const wordKanji = kanji ? JSON.parse(word) : null;
          return (
            <button
              key={index}
              disabled={corrected}
              onClick={() => clickWord(index)}
              className={clsx(
                stIndex === index && 'shadow-lg shadow-teal-950 dark:shadow-teal-200 scale-105 transition-all duration-100',
                'p-1 hover:text-clip truncate rounded-lg overflow-auto shadow ring-1 ring-slate-900/5 text-[28px] leading-6 font-semibold dark:highlight-white/5 bg-teal-900/20 dark:bg-slate-400/10  text-gray-700 dark:text-green-300'
                , corrected && 'bg-gray-100/10 dark:bg-gray-100/10 transition-all duration-300',
              )}
            >
              <p className={clsx(corrected && 'dark:text-gray-300 text-gray-300', "pb-2 ")}>{kanji ? wordKanji.word : word}</p>
              {kanji && wordKanji.kanji && wordKanji.kanji !== 'null' && (
                <p className={clsx(corrected && "dark:text-gray-300 text-gray-300/10", "text-gray-500 dark:text-lime-900")}>[ {wordKanji.kanji} ]</p>
              )}
            </button>
          );
        })}
      </div>
      {endGame && (
        <>
          <div className="z-50 absolute">
            Kết thúc !!!
            <div className=" mt-5">
              <button onClick={() => setIsMatching(false)} className='text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800'>Trở về</button>
            </div>
          </div>
          <BackgroundDialog />
        </>
      )}
    </div>
  );
}