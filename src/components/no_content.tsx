import {DocumentArrowUpIcon } from '@heroicons/react/24/solid'
export default function NoContent(){
  return <>
    <div className="flex flex-col gap-3 justify-center items-center h-3/4 w-3/4 dark:bg-slate-200/10 bg-slate-300/20 p-5 rounded-xl bg-opacity-80 backdrop-filter backdrop-blur-lg drop-shadow-xl">
      <DocumentArrowUpIcon className='size-16 colo stroke-orange-400 glow'/>
      <p className="mr-3 flex-none overflow-hidden md:w-auto font-mono text-3xl font-black text-orange-700">Chọn bài đi</p>
    </div>
    </>
}