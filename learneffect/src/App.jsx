import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './component/Counter'
import Parent from './component/Parent'
import TitleChanger from './component/TitleChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      <Parent/>

      <TitleChanger/>

    </>
  )
}

export default App
