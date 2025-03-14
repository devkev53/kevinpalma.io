import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import About from './components/About/About'
import Loader from './components/Loader/Loader'
import { Skills } from './components/Skills/Skills'
import { Training } from './components/Training/Training'
import { Projects } from './components/Projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Loader/>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Training/>
      <Projects/>
    </>
  )
}

export default App
