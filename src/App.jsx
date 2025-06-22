import React from 'react'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Products from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact.jsx"
const App = () => {
  return (
    <div>
   <Nav/>
   <Home/>
   <About/>
   <Products/>
   <Contact/>
    </div>
  )
}

export default App

