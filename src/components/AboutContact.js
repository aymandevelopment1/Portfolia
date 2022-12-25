import React from 'react'
import { Link } from 'react-router-dom'
import './style/AboutContact.css'
import reac1 from '../assets/react1.jpg'
import reac2 from '../assets/react2.webp'
import { Typewriter } from 'react-simple-typewriter'


export default function AboutContact() {
  return (
    <div className='about'>
        <div className='left'>
          
        {/* <p>Im a Frontend development React js </p> */}
        <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Who about{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[  'About', 'Portfolia!','Website!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
        </span>
      </h1>
        <Link to="/contact" className='btn'>Contact</Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stac top'>
                    <img src={reac1}  classNameimg alt='true' />
                    <img src={reac2}  classNameimg alt='true' />
                </div>
            </div>
        </div>
        
    </div>
  )
}
