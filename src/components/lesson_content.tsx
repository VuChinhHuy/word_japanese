import { HeartIcon, XMarkIcon, ExclamationTriangleIcon, CheckBadgeIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { useLesson } from '../store/setting_lesson'
import { LessonCollection, LessonList } from '../constants/data_word'
import { useEffect, useState } from 'react'
import { Iword } from '../interface/Iword'
import { useSetting } from '../store/setting_store'
import clsx from 'clsx'
import BackgroundDialog from './background_dialog'
export function LessonContent() {
  const { selectedLesson } = useLesson((state) => ({
    selectedLesson: state.selectedLesson,
  }))
  const { kanji, beforeVi } = useSetting((state) => ({
    kanji: state.kanji,
    beforeVi: state.beforeVi
  }))
  const [lessonWord, setLessonWord] = useState<Array<Iword>>([]);
  const [indexWord, setIndexWord] = useState(0);
  const [opPractice, setOpPractice] = useState(false);
  const [isVi, setIsVi] = useState(false);
  useEffect(() => {
    const word = LessonCollection.get(selectedLesson)
    if (word && word.length > 0) {
      setLessonWord(word)
    }
    setIsVi(beforeVi)
    setIndexWord(0)
  }, [selectedLesson])
  function changeWord(plus: boolean) {
    setIsVi(beforeVi)
    if (plus) {
      if (indexWord == lessonWord.length) return
      setIndexWord(indexWord + 1)
    } else {
      if (indexWord == 0) return
      setIndexWord(indexWord - 1)
    }
  }
  return <>
    <div className="h-5/6 lg:w-1/2 px-2 w-full flex flex-col gap-1">
      <div className='flex flex-row items-cencter justify-around'>
        <div className='flex flex-col items-center text-teal-950 dark:text-teal-200'>
          <h2 className='text-xl'>{LessonList.get(selectedLesson)} có {lessonWord.length ?? 0} từ </h2>
          <p> No {indexWord + 1}</p>
        </div>
        <div className='relative'>
          <div className={clsx(opPractice && 'relative z-50')}>
            <button onClick={() => { setOpPractice(!opPractice) }} type="button" className={clsx(' h-12 w-12  justify-between leading-5 font-semibold bg-teal-900/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5')}>
              {!opPractice ? <EllipsisHorizontalIcon className='size-9' /> :
                <XMarkIcon className='size-9' />}
            </button>
          </div>
          {opPractice && <BackgroundDialog />}
          <div className={clsx(!opPractice && '-z-50 -translate-y-1/2 duration-300 transition-transform scale-y-0',
            opPractice && 'z-50 opacity-100 duration-300 transition-transform',
            'absolute top-full flex flex-col gap-2 right-0 mt-2 py-2 w-48 rounded-lg overflow-auto shadow ring-1 ring-slate-900/5 text-sm leading-6 font-semibold bg-teal-900/20   dark:bg-slate-400/10  dark:highlight-white/5 text-gray-500 dark:text-gray-950')}>
            <div>
              <div className='m-2  border-slate-200 border-b'>
                Luyện tập
              </div>
              <div className={clsx('snap-center flex items-center justify-between px-1 py-1 cursor-pointer')} onClick={() => {
              }}>
                <p className={clsx(' bg-slate-500/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200', 'text-sm font-semibold w-full px-2 py-1 rounded-lg hover:bg-slate-400/20 dark:hover:bg-slate-300/10')}>Nhiều câu trả lời</p>
              </div>
              <div className={clsx('snap-center flex items-center justify-between px-1 py-1 cursor-pointer')} onClick={() => {
              }}>
                <p className={clsx(' bg-slate-500/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200', 'text-sm font-semibold w-full px-2 py-1 rounded-lg hover:bg-slate-400/20 dark:hover:bg-slate-300/10')}>Ghép thẻ</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full h-4/5 flex flex-row justify-around items-center">
        <div className='pr-3'>
          <button onClick={() => changeWord(false)} type="button" className='h-12 w-12 justify-between leading-5 font-semibold bg-teal-900/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5'>
            <ChevronLeftIcon className='size-9' />
          </button>
        </div>
        <div onClick={() => setIsVi(!isVi)} className='flex-col justify-around h-full w-full md:w-96 bg-teal-900/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-xl py-1 px-3 sm:px-1 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5'>
          {isVi ? (<div>
            <div className='m-1 md:m-6'>
              <p className='font-[Kamikaze] md:text-[42px] text-[32px]' >{lessonWord[indexWord]?.character.hiragana ?? lessonWord[indexWord]?.character.katakana}</p>
            </div>
            {kanji && <div className='m-6'>
              <p className='font-[Kamikaze] md:text-[42px] text-[32px]'>{lessonWord[indexWord]?.character.kanji}</p>
            </div>}
          </div>) : <div className='m-1 md:m-6 transition '>
            {lessonWord[indexWord]?.name}
          </div>}


        </div>
        <div className='pl-3'>
          <button onClick={() => changeWord(true)} type="button" className='h-12 w-12 justify-between leading-5 font-semibold bg-teal-900/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5'>
            <ChevronRightIcon className='size-9' />
          </button>
        </div>
      </div>
      <div className="w-full h-1/5 flex justify-center items-center ">
        <div className="w-auto p-2 rounded-2xl flex flex-row gap-2 justify-around">
          <button type="button" className='h-12 w-12  justify-between leading-5 font-semibold bg-teal-900/20  dark:bg-slate-400/10 text-red-500 dark:text-red-200 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5'>
            <ExclamationTriangleIcon className='size-9' />
          </button>
          <button type="button" className='h-12 w-12  justify-between leading-5 font-semibold bg-teal-900/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5'>
            <HeartIcon className='size-9' />
          </button>
          <button type="button" className='h-12 w-12  justify-between leading-5 font-semibold bg-teal-900/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5'>
            <CheckBadgeIcon className='size-9' />
          </button>

        </div>
      </div>

    </div>
  </>
}