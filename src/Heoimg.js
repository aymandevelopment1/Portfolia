import React from 'react'
import './Heroimg.css'
import Into from './assets/intro-bg.jpg'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

export default function Heoimg() {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={Into} alt='/'/>
        </div>
     
        <div className='content'>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
       My Name Ayman{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['IAM', 'Frontend', 'Development', 'React js!','Next js!','Typescript!']}
            loop={5}
            cursor
            cursorStyle='>'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
        </span>
      </h1>
  
         
       
        <div className='btns'>
            <Link className='btn' to="/project">Project</Link>
            <Link className='btn btn-light' to="/contact">Contact</Link>

        </div>
      </div>
    </div>
  )
}
