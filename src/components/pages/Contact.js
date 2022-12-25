import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../Footer'
import Hero from '../../Hero'
import Form from '../Form'


export default function Contact() {
  return (
    <div>
        <Navbar/>
        <Hero heading="Contact" text="Lets chat massage"/>
       <Form/>
       <Footer/>
    </div>
  )
}
