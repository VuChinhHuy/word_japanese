/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { useEffect, useMemo, useState } from "react";
import { useLesson } from "../store/setting_lesson";
import { useSetting } from "../store/setting_store";
import { Iword } from "../interface/Iword";
import { LessonCollection } from "../constants/data_word";
import { generateWords, playAudio } from '../utils/generate_word';

export default function PracticeTest() {
  const { selectedLesson, setIsTest } = useLesson((state) => ({
    selectedLesson: state.selectedLesson,
    setIsTest: state.setIsTest
  }))
  const { kanji, beforeVi } = useSetting((state) => ({
    kanji: state.kanji,
    beforeVi: state.beforeVi
  }))
  const [lessonWord, setLessonWord] = useState<Array<Iword>>([]);
  const [currentWord, setCurrentWord] = useState<Iword>()
  const [tests, setTests] = useState<Iword[]>([])
  const [answers, setAnswer] = useState<string[]>([])
  const [isJp, setIsJp] = useState(true)
  useMemo(() => {
    const word = LessonCollection.get(selectedLesson)
    if (word && word.length > 0) {
      setLessonWord(word)
    }
  }, [selectedLesson])
  useEffect(() => {
    const resWords = generateWords(lessonWord, lessonWord.length);
    setCurrentWord(resWords.pop())
    setTests(resWords)
  }, [lessonWord])

  useEffect(() => {
    if (!currentWord) return
    let jp = Math.floor(Math.random() * 10) % 2 == 0
    if (!beforeVi) setIsJp(jp)
    else {
      setIsJp(false)
      jp = false
    }
    let i = 0
    let answer: Iword[] = []
    const correct = Math.floor(Math.random() * 4)
    while (i < 4) {
      const wordRandom = lessonWord[Math.floor(Math.random() * lessonWord.length)]
      if (i == correct) {
        answer.push(currentWord)
        i++
        continue
      }
      if (wordRandom && !answer.includes(wordRandom) && JSON.stringify(currentWord) !== JSON.stringify(wordRandom)) {
        answer.push(wordRandom);
        i++
      }
    }
    if (jp) {
      setAnswer(answer.map(an => (an.name)))
      playAudio(selectedLesson+'/'+currentWord?.sound)
    } else {
      setAnswer(answer.map(an => an.character.hiragana ?? an.character.katakana ?? ''))

    }

  }, [currentWord, setAnswer, setIsJp])
  function chooseAnswer(answer: string) {
    const correct = isJp ? currentWord?.name : (currentWord?.character.hiragana ?? currentWord?.character.katakana)
    if (correct === answer) {
      setCurrentWord(tests.pop())
      playAudio('good')
    }else playAudio('wrong')
  }

  return <div className="h-full w-full flex justify-center items-center">
    <div className="flex flex-col h-full md:h-3/4 w-full lg:w-2/3 xl:w-1/2 mx-2 md:mx-0 justify-around items-center">
      <div className='flex flex-row w-full justify-start items-start mb-4 md:mb-0'>
        <button onClick={() => { setIsTest(false) }} type="button" className='h-10 w-10 md:h-12 md:w-12 justify-between leading-5 font-semibold bg-teal-900/20 dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5'>
          <ArrowUturnLeftIcon className='size-7 md:size-9' />
        </button>
      </div>
      <div className="w-full h-1/3 md:h-3/5 flex justify-center items-center">
        <div className="text-[28px] md:text-[42px] text-teal-950 dark:text-teal-200">
          {isJp ? <>
            <p className=" font-[Kamikaze]">{currentWord?.character.hiragana ?? currentWord?.character.katakana}</p>

            {kanji && <p className=" font-[Kamikaze]">{currentWord?.character.kanji ? '( ' + currentWord?.character.kanji + ' )' : ''}</p>}
          </>
            :
            <p className=" font-semibold">{currentWord?.name}</p>}
        </div>
      </div>
      <div className="w-full h-1/2 my-2 md:my-0">
        <div className="grid grid-cols-2 md:grid-rows-2 md:grid-flow-col gap-2 md:gap-4 h-full w-full">
          {answers.map((answer, index) => (
            <button onClick={() => chooseAnswer(answer)} key={index} className="p-1 rounded-lg overflow-auto shadow ring-1 ring-slate-900/5 text-[20px] md:text-[28px] leading-6 font-semibold bg-teal-900/20 dark:bg-slate-400/10 dark:highlight-white/5 text-gray-500 dark:text-gray-50">
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
}