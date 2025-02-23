import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App
