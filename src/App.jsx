import React from 'react'

import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonails from './Components/Testimonails'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


const App = () => {

  return (
    <div className=' w-full overflow-hidden'>
      
      <Header/>
      <About/>
      <Projects/>
      <Testimonails/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
