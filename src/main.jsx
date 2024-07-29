import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import About from './Pages/About'
import Skill from './Pages/Skill'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
   
   
  </React.StrictMode>,

)
