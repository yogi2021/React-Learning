import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Student1 from './component/Student1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Student1/>
    </>
  )
}

export default App
