import { XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useSetting } from '../store/setting_store';
interface IDrawerSetting {
  open: boolean,
  onClose: () => void
}
export default function DrawerSetting(props: IDrawerSetting) {
  const { open, onClose } = props;
  const { beforeVi, setBeforeVi, kanji, setKanji } = useSetting(
    (state) => ({
      kanji: state.kanji,
      beforeVi: state.beforeVi,
      setBeforeVi: state.setBeforeVi,
      setKanji: state.setKanji
    })
  )
  return (<>
    <div className={clsx(!open && "-z-50 transition-all duration-300 ", "relative z-[100] ")} role="dialog">
      <div className={clsx(!open && "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity")}></div>
      <div className={clsx(!open && 'translate-x-full duration-300 transition-transform', "fixed inset-0 overflow-hidden")}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto relative w-screen max-w-md">
              <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                <button type="button" className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={onClose}>
                  <XMarkIcon className='size-6' />
                </button>
              </div>

              <div className="flex h-full flex-col overflow-y-scroll bg-teal-50 dark:bg-sky-950 text-gray-900 dark:text-white py-6 shadow-xl">
                <div className="px-4 sm:px-6 border-b border-slate-900/10 dark:border-slate-50/[0.06] pb-2">
                  <h2 className="text-base font-semibold leading-6 " id="slide-over-title">Cài đặt</h2>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6 flex-col gap-2">
                  <div className='flex flex-row justify-between'>
                    <p className='text-ellipsis'>Hiển thị Kanji</p>
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" checked={kanji} onChange={() => setKanji(!kanji)} className="sr-only peer" />
                      <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600 dark:peer-checked:bg-teal-300"></div>
                    </label>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <p className='text-ellipsis'>Tiếng Việt trước</p>
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" checked={beforeVi} onChange={() => setBeforeVi(!beforeVi)} className="sr-only peer" />
                      <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600 dark:peer-checked:bg-teal-300"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

