import { CogIcon, MoonIcon, SunIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { useSetting } from '../store/setting_store';
import { useLesson } from '../store/setting_lesson';
import DrawerSetting from '../setting/drawer_setting';
import BackgroundDialog from '../components/background_dialog'
import { useState } from 'react';
import clsx from 'clsx';
import { LessonList } from '../constants/data_word';
export default function Header() {
    const [isSetting, setIsSetting] = useState(false);
    const { modeTheme, toggleModeTheme } = useSetting((state) => ({
        modeTheme: state.modeTheme,
        toggleModeTheme: state.toggleModeTheme
    }));
    const { selectedLesson, setSelectedLesson } = useLesson((state) => ({
        selectedLesson: state.selectedLesson,
        setSelectedLesson: state.setSelectedLesson
    }))
    const [opLesson, setOpLesson] = useState(false);

    return (<>
        {opLesson && <BackgroundDialog/>}
        <div className="sticky top-0 z-40 w-full h-14 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]  supports-backdrop-blur:bg-white/60 bg-transparent">
            <div className="py-3 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 px-4">
                <div className="relative flex items-center justify-between">
                    <div className="mr-3 flex-none overflow-hidden md:w-auto font-[Kamikaze] text-lg lg:text-2xl xl:text-3xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% inline-block text-transparent bg-clip-text">
                        Japanese
                    </div>
    
                    <div className="mx-auto ">
                        <button onClick={() => setOpLesson(!opLesson)} type="button" className={clsx(
                            opLesson && 'z-50'
                            ,'text-xs w-36 md:w-40 lg:w-48 justify-between leading-5 font-semibold bg-teal-900/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:hover:bg-slate-200/20 dark:highlight-white/5')}>
                            <p className='text-ellipsis overflow-hidden truncate'>{selectedLesson ? LessonList.get(selectedLesson) : 'Chọn bài'}</p>
                            <span >
                                <ChevronDownIcon className='size-4' />
                            </span>
                        </button>
                        <div className={clsx(!opLesson && '-z-50 -translate-y-1/2 duration-300 transition-transform scale-y-0',
                            opLesson && 'z-50 opacity-100 duration-300 transition-transform',
                            'snap-y scroll-smooth absolute top-full w-36 md:w-40 lg:w-48 mt-2 py-2  text-lg lg:text-2xl xl:text-3xl h-48 rounded-lg overflow-auto shadow ring-1 ring-slate-900/5 leading-6 font-semibold bg-teal-900/20   dark:bg-slate-400/10  dark:highlight-white/5 text-gray-500 dark:text-gray-950')}>
                            {Array.from(LessonList).map(([key, value]) => (
                                <div className={clsx('snap-center flex items-center justify-between px-1 py-1 cursor-pointer')} key={key} onClick={() => {
                                    setOpLesson(false)
                                    setSelectedLesson(key)
                                }}>
                                    <p className={clsx(selectedLesson === key && ' bg-slate-500/20  dark:bg-slate-400/10 text-teal-950 dark:text-teal-200', 'text-sm font-semibold w-full px-2 py-1 rounded-lg hover:bg-slate-400/20 dark:hover:bg-slate-300/10')}>{value}</p>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className='relative flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-600 '>

                        <button className='hover:text-teal-400 text-teal-500' onClick={() => { toggleModeTheme(modeTheme == 'dark' ? 'light' : 'dark') }}>
                            {modeTheme == 'dark' ?
                                <MoonIcon className='size-6 ' /> : <SunIcon className='size-6 ' />
                            }
                        </button>
                        <button className='hover:text-lime-950 text-lime-900 dark:text-blue-600 dark:hover:text-blue-400 ml-6 ' onClick={() => { setIsSetting(true) }}>
                            <CogIcon className='size-6 ' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <DrawerSetting open={isSetting} onClose={() => setIsSetting(!isSetting)} />
    </>)
}   