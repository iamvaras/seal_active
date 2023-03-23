import React from 'react'
import './App.css'
import {Navbar} from './components'
import { Homepage , Aboutus, HotMelt, Products, SocialMedia, Gallery, Contact } from './container'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <HotMelt/>
      <Products/>
      <SocialMedia/>
      <Aboutus/>
      <Gallery/>
      <Contact/>
    
    </div>
  )
}

export default App