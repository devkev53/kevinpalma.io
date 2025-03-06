import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import About from './components/About/About'
import Loader from './components/Loader/Loader'
import { Skills } from './components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Loader/>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
    </>
  )
}

export default App
