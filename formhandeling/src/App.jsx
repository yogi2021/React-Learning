import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LearnForm from './componant/LearnForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LearnForm></LearnForm>
    </>
  )
}

export default App
