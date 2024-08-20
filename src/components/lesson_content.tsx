/* eslint-disable react-hooks/exhaustive-deps */
import { HeartIcon, XMarkIcon, ExclamationTriangleIcon, CheckBadgeIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid'
import { useLesson } from '../store/setting_lesson'
import { LessonCollection, LessonList } from '../constants/data_word'
import { useEffect, useState } from 'react'
import { Iword } from '../interface/Iword'
import { useSetting } from '../store/setting_store'
import clsx from 'clsx'
import BackgroundDialog from './background_dialog'
import { playAudio } from '../utils/generate_word'
export function LessonContent() {
  const { selectedLesson, setIsTest, setIsMatching } = useLesson((state) => ({
    selectedLesson: state.selectedLesson,
    setIsTest: state.setIsTest,
    setIsMatching: state.setIsMatching
  }))
  const { kanji, beforeVi, isFlipCard } = useSetting((state) => ({
    kanji: state.kanji,
    beforeVi: state.beforeVi,
    isFlipCard: state.isFlipCard
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
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') {
        changeWord(false);
      } else if (e.key === 'ArrowRight') {
        changeWord(true);
      }
      else if (e.key === ' ') {
        playAudio(selectedLesson + '/'+lessonWord[indexWord]?.sound)
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [indexWord, lessonWord.length]);
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
      <div className="w-full flex flex-col max-w-4xl p-4 md:p-6 lg:p-8 h-full">
        <div className='flex flex-none flex-row items-center justify-between mb-4'>
          <div className='flex flex-col items-start text-teal-950 dark:text-teal-200'>
            <h2 className='text-xl font-semibold'>{LessonList.get(selectedLesson)}</h2>
            <p className='text-sm'>{lessonWord.length ?? 0} từ - Số {indexWord + 1}</p>
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
                  setIsTest(true)
                }}>
                  <p className={clsx(' bg-slate-500/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200', 'text-sm font-semibold w-full px-2 py-1 rounded-lg hover:bg-slate-400/20 dark:hover:bg-slate-300/10')}>Nhiều câu trả lời</p>
                </div>
                <div className={clsx('snap-center flex items-center justify-between px-1 py-1 cursor-pointer')} onClick={() => {
                  setIsMatching(true)
                }}>
                  <p className={clsx(' bg-slate-500/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200', 'text-sm font-semibold w-full px-2 py-1 rounded-lg hover:bg-slate-400/20 dark:hover:bg-slate-300/10')}>Ghép thẻ</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-row items-center justify-center flex-1">
          <button onClick={() => changeWord(false)} type="button" className='h-12 w-12 bg-teal-900/20 dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full flex items-center justify-center hover:bg-slate-400/20 dark:hover:bg-slate-200/20 transition-colors'>
            <ChevronLeftIcon className='w-6 h-6' />
          </button>

          <div className="flex-1 max-w-[600px] mx-4 aspect-[3/4] md:aspect-[4/3]">
            {!isFlipCard ? (
              <div className='h-full w-full bg-teal-900/20 gap-2 dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-xl p-4 md:p-6 flex flex-col justify-between'>
                <div className='flex justify-end'>
                  <button onClick={() => playAudio(selectedLesson + '/'+lessonWord[indexWord]?.sound)} type="button" className='h-10 w-10 md:h-12 md:w-12 text-teal-950 dark:text-teal-200 rounded-full flex items-center justify-center hover:bg-slate-400/20 dark:hover:bg-slate-200/20 transition-colors'>
                    <SpeakerWaveIcon className='w-5 h-5 md:w-6 md:h-6' />
                  </button>
                </div>
                {beforeVi ? <>
                  <div className='flex w-full flex-col flex-1  border-1 border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]'>
                    <div className='dark:text-cyan-300 underline underline-offset-4'>Việt: </div>
                    <div className='flex flex-1 justify-center items-center '>
                      <p className=' md:text-[32px] text-[28px]' >{lessonWord[indexWord]?.name}</p>
                    </div>
                  </div>
                  <div className='flex w-full flex-col flex-1 border-1 border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]'>
                    <div className=' underline dark:text-cyan-300 underline-offset-4'>Nhật: </div>
                    <div className='flex flex-1 justify-center items-center '>
                      <p className='font-[Kamikaze] md:text-[42px] text-[32px]' >{lessonWord[indexWord]?.character.hiragana ?? lessonWord[indexWord]?.character.katakana}</p>
                    </div>
                  </div>
                  {kanji && <div className=' w-full flex flex-row items-center'>
                    <div className='dark:text-cyan-300'>Kanji: </div>
                    <div className='flex-1 flex justify-center	 items-center'>

                      <p className='font-[Kamikaze] md:text-[32px] text-[28px]' >{lessonWord[indexWord]?.character.kanji ?? ''}</p>
                    </div>
                  </div>}
                  {lessonWord[indexWord]?.note && <div className='w-full border-t border-1 border-slate-900/10 dark:border-slate-50/[0.06]'>
                    <p className='text-gray-900 dark:text-gray-50'>
                      {lessonWord[indexWord]?.note}
                    </p>
                  </div>}
                </> : <>
                  <div className='flex w-full flex-col flex-1 border-1 border-b border-slate-900/10 dark:border-slate-50/[0.06]'>
                    <div className=' underline dark:text-cyan-300 underline-offset-4'>Nhật: </div>
                    <div className='flex flex-1 justify-center items-center '>
                      <p className='font-[Kamikaze] md:text-[42px] text-[32px]' >{lessonWord[indexWord]?.character.hiragana ?? lessonWord[indexWord]?.character.katakana}</p>
                    </div>
                  </div>
                  {kanji && <div className=' w-full flex flex-row items-center border-1 border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]'>
                    <div className='dark:text-cyan-300'>Kanji: </div>
                    <div className='flex-1 flex justify-center	 items-center'>

                      <p className='font-[Kamikaze] md:text-[32px] text-[28px]' >{lessonWord[indexWord]?.character.kanji ?? ''}</p>
                    </div>
                  </div>}
                  <div className='flex w-full flex-col flex-1'>
                    <div className='dark:text-cyan-300 underline underline-offset-4'>Việt: </div>
                    <div className='flex flex-1 justify-center items-center '>
                      <p className=' md:text-[32px] text-[28px]' >{lessonWord[indexWord]?.name}</p>
                    </div>
                  </div>
                  {lessonWord[indexWord]?.note && <div className='w-full border-t border-1 border-slate-900/10 dark:border-slate-50/[0.06]'>
                    <p className='text-gray-900 dark:text-gray-50'>
                      {lessonWord[indexWord]?.note}
                    </p>
                  </div>}
                </>}
              </div>
            ) : (
              <div className='relative h-full w-full'>
                {!isVi && <div className='absolute z-40 top-1 flex flex-col gap-2 right-1'>
                  <button onClick={() => playAudio(selectedLesson + '/'+lessonWord[indexWord]?.sound)} type="button" className='h-12 w-12 justify-between leading-5 font-semibold text-teal-950 dark:text-teal-200 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5'>
                    <SpeakerWaveIcon className='size-9' />
                  </button>
                </div>}
                <div onClick={() => setIsVi(!isVi)} className=' flex-col justify-around h-full w-full bg-teal-900/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-xl py-1 px-3 sm:px-1 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5'>
                  {!isVi ? (<div className=''>

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
              </div>
            )}
          </div>

          <button onClick={() => changeWord(true)} type="button" className='h-12 w-12 bg-teal-900/20 dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full flex items-center justify-center hover:bg-slate-400/20 dark:hover:bg-slate-200/20 transition-colors'>
            <ChevronRightIcon className='w-6 h-6' />
          </button>
        </div>

        <div className="mt-4 flex flex-none flex-row justify-center">
          <div className="flex gap-4">
            <button type="button" className='h-12 w-12 bg-teal-900/20 dark:bg-slate-400/10 text-red-500 dark:text-red-200 rounded-full flex items-center justify-center hover:bg-slate-400/20 dark:hover:bg-slate-200/20 transition-colors'>
              <ExclamationTriangleIcon className='w-6 h-6' />
            </button>
            <button type="button" className='h-12 w-12 bg-teal-900/20 dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full flex items-center justify-center hover:bg-slate-400/20 dark:hover:bg-slate-200/20 transition-colors'>
              <HeartIcon className='w-6 h-6' />
            </button>
            <button type="button" className='h-12 w-12 bg-teal-900/20 dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full flex items-center justify-center hover:bg-slate-400/20 dark:hover:bg-slate-200/20 transition-colors'>
              <CheckBadgeIcon className='w-6 h-6' />
            </button>
          </div>
        </div>
      </div>
  </>
}