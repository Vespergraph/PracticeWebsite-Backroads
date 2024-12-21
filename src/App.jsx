import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Footer from './Components/Footer'
import Tours from './Components/Tours'


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/> 
    <Tours/>
    <Footer/>
    </>
  )
}

export default App
