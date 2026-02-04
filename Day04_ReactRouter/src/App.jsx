import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header/>
      <h1 className='bg-green-600 p-4'>React Router</h1>

    </>
  )
}

export default App
