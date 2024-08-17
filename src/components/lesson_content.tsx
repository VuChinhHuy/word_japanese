import { HeartIcon, CheckBadgeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useLesson } from '../store/setting_lesson'
import {LessonCollection} from '../constants/data_word'
import { useEffect, useState } from 'react'
import { Iword } from '../interface/Iword'
export function LessonContent() {
  const { selectedLesson } = useLesson((state) => ({
    selectedLesson: state.selectedLesson,
  }))
  const [lessonWord, setLessonWord] = useState<Array<Iword>>([]);
  const [indexWord, setIndexWord] = useState(0);

  useEffect(()=>{
    const word = LessonCollection.get(selectedLesson)
    if(word && word.length > 0){
      setLessonWord(word)
    }
  },[selectedLesson])
  function changeWord(plus: boolean){
    if(plus){
      setIndexWord(indexWord+1)
    }else {
      setIndexWord(indexWord-1)
    }
  }
  return <>
    <div className="h-5/6 w-1/2 flex flex-col gap-1">
      <div className="w-full h-4/5 flex flex-row justify-around items-center">
        <button onClick={()=> changeWord(false)} type="button" className='h-12 w-12  justify-between leading-5 font-semibold bg-teal-900/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5'>
          <ChevronLeftIcon className='size-9' />
        </button>
        <div className='gap-2 flex-col justify-around h-full w-96 bg-teal-900/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-xl py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5'>
          <div className='m-6'>
            <p className='font-[Kamikaze] text-[42px]'>{lessonWord[selectedLesson]}</p>
          </div>
          {/* <div className=''>
            <p>nguoi</p>
          </div> */}
        </div>
        <button onClick={()=> changeWord(true)} type="button" className='h-12 w-12 justify-between leading-5 font-semibold bg-teal-900/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5'>
          <ChevronRightIcon className='size-9' />
        </button>
      </div>
      <div className="w-full h-1/5 flex justify-center items-center ">
        <div className="w-auto p-2 rounded-2xl flex flex-row gap-2 justify-around">
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