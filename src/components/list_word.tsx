import { useState, useEffect, useMemo } from 'react';
import { Iword } from "../interface/Iword";
import { LessonCollection } from "../constants/data_word";
import { useSetting } from "../store/setting_store";
import clsx from "clsx";
import { MagnifyingGlassIcon, SpeakerWaveIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { useLesson } from '../store/setting_lesson';
import { playAudio } from '../utils/generate_word';
interface WordListProps {
  setBack: () => void;
}
export default function WordList({ setBack }: WordListProps) {

  const [allWords, setAllWords] = useState<Iword[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { kanji,beforeVi } = useSetting((state) => ({
    kanji: state.kanji,
    beforeVi: state.beforeVi,
  }));
  const { selectedLesson } = useLesson((state) => ({
    selectedLesson: state.selectedLesson,
  }));

  useEffect(() => {
    setAllWords(LessonCollection.get(selectedLesson) ?? []);
  }, [selectedLesson]);

  const filteredWords = useMemo(() => {
    return allWords.filter(word =>
      word.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (word.character.hiragana && word.character.hiragana.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (word.character.katakana && word.character.katakana.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (word.character.kanji && word.character.kanji.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [allWords, searchTerm]);

  return (
    <div className="h-svh w-full flex flex-col bg-green-100 dark:bg-blue-950">
      <div className='px-4 py-2'>
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={() => setBack()} 
            type="button" 
            className={clsx(
              'h-12 w-12 justify-center leading-5 font-semibold',
              'bg-teal-900/20 dark:bg-slate-400/10',
              'text-teal-950 dark:text-teal-200',
              'rounded-full py-1 px-3 flex items-center',
              'hover:bg-slate-400/20 dark:hover:bg-slate-200/20',
              'dark:highlight-white/5'
            )}
          >
            <ArrowUturnLeftIcon className='size-9' />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
            Danh sách từ vựng
          </h1>
          <div className="w-12"></div>
        </div>

        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Tìm kiếm từ vựng..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4 scroll-smooth">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-16">
          {filteredWords.map((word, index) => (
            <div key={index} className={clsx(
              "p-4 rounded-lg shadow-md",
              "bg-white dark:bg-gray-800/50",
              "border border-gray-200 dark:border-gray-700"
            )}>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {beforeVi ? word.name : word.character.hiragana || word.character.katakana}
                </h2>
                {word.sound && (
                  <button
                    onClick={() => playAudio(selectedLesson + '/' + word.sound)}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-800 dark:text-gray-200 backdrop-blur-sm transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-sm"
                  >
                    <SpeakerWaveIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
              <p className="text-base text-gray-600 dark:text-gray-400">
                {beforeVi ? word.character.hiragana || word.character.katakana : word.name}
              </p>
              {kanji && word.character.kanji && (
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Kanji: {word.character.kanji}
                </p>
              )}
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {word.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}