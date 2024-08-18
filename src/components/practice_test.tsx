import { useEffect, useState } from "react";
import { useLesson } from "../store/setting_lesson";
import { useSetting } from "../store/setting_store";
import { Iword } from "../interface/Iword";
import { LessonCollection } from "../constants/data_word";

export default function PracticeTest() {
  const { selectedLesson } = useLesson((state) => ({
    selectedLesson: state.selectedLesson,
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
  useEffect(() => {
    const word = LessonCollection.get(selectedLesson)
    if (word && word.length > 0) {
      setLessonWord(word)
    }
  }, [selectedLesson])
  useEffect(() => {
    generateWord()
  }, [lessonWord])
  useEffect(() => {
    const jp = Math.floor(Math.random() * 10) % 2 == 0
    setIsJp(jp)
    let i = 0
    let answer: Iword[] = []
    while (i < 3) {
      const wordRandom = lessonWord[Math.floor(Math.random() * lessonWord.length)]
      if (jp)
        if (wordRandom && !answer.includes(wordRandom) && JSON.stringify(currentWord) !== JSON.stringify(wordRandom)) {
          answer.push(wordRandom);
          i++
        }
    }
    if (jp) {
      setAnswer(answer.map(an => (an.name)))
    } else {
      setAnswer(answer.map(an => an.character.hiragana ?? an.character.katakana ?? ''))
    }
  }, [currentWord])

  function generateWord() {
    let list: Iword[] = []
    let i = 0;
    while (i < lessonWord.length) {
      const wordRandom = lessonWord[Math.floor(Math.random() * lessonWord.length)]
      if (wordRandom && !list.includes(wordRandom)) {
        list.push(wordRandom);
        i++
      }
    }
    setTests(list)
    setCurrentWord(list.pop())
  }

  return <div className="h-full w-full  flex justify-center items-center">
    <div className="flex flex-col h-3/4 w-full md:w-1/2 mx-2 md:mx-0 justify-around items-center">
      <div className="w-full h-3/5 flex justify-center items-center">
        <div className="md:text-[42px] text-[32px]  text-teal-950 dark:text-teal-200">
          {isJp ? <p className=" font-[Kamikaze]">{currentWord?.character.hiragana ?? currentWord?.character.katakana}</p> :
            <p className=" font-semibold">{currentWord?.name}</p>}
        </div>
      </div>
      <div className="w-full h-2/5 ">
        <div className="grid grid-rows-2 grid-flow-col gap-4 h-full w-full">
          {answers.map((answer, index) => (
            <button key={index} className="rounded-lg overflow-auto shadow ring-1 ring-slate-900/5 text-sm leading-6 font-semibold bg-teal-900/20   dark:bg-slate-400/10  dark:highlight-white/5 text-gray-500 dark:text-gray-950">
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
}