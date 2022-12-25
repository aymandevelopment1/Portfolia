import React from 'react'
import Hero from '../../Hero'
import Navbar from '../../Navbar'
import Footer from '../Footer'
import PricingCard from '../PricingCard'
import Work from '../Work'
import WorkCard from '../WorkCard'



export default function Project() {
  return (
    <div>
         <Navbar/>
      <Hero heading="projects." text=" some of my most recent works"/>
  <Work/>
  {/* <WorkCard/> */}
      <PricingCard />
     <Footer/>
      

    </div>
    
  )
}
