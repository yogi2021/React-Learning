import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Student1 from './component/Student1'
import Student2 from './component/Student2'
import Student3 from './component/Student3'

function App() {

  return (
    <>
      <div style={{
        display:'flex',
        gap:'30px'
      }}>

      

     <Student1/>
     <Student2/>
     <Student3/>
     </div>
    </>
  )
}

export default App
