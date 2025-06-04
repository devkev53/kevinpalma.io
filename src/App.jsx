
import './App.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import About from './components/About/About'
import Loader from './components/Loader/Loader'
import { Skills } from './components/Skills/Skills'
import { Training } from './components/Training/Training'
import { Projects } from './components/Projects/Projects'
import { Footer } from './components/Footer/Footer'


function App() {

  return (
    <>
      {/* <Loader/> */}
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Training/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
