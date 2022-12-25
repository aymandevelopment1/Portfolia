import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../Footer'
import Hero from '../../Hero'
import AboutContact from '../AboutContact'


export default function About() {
  return (
    <div>
         <Navbar/>
         <Hero heading="About." text="iam front end development"/>
       <AboutContact/>
       <Footer/>
    </div>
  )
}
