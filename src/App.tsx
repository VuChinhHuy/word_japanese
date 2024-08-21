import { useEffect } from 'react'
import './App.css'
import Layout from './layout/layout'
import { useSetting } from './store/setting_store'
import clsx from 'clsx'

function App() {
  const { modeTheme, getSetting } = useSetting((state) => ({
    modeTheme: state.modeTheme,
    getSetting: state.getSetting
  }));
  useEffect(() => {
    getSetting()
  }, [getSetting])
  return (
    <div className={clsx(modeTheme === 'dark' && 'dark','h-svh w-full block overflow-y-hidden')}>
      <div className=' bg-green-100 dark:bg-blue-950 h-full w-full flex flex-col'>
        <Layout/>
      </div>
    </div>
  )
}

export default App
