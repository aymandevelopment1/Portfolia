import React from 'react'
import './Footer.css'
import {FaFacebook, FaHome, FaLink, FaMailBulk, FaPhone, FaWhatsapp}from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'white', marginRight:'1rem'} }/>
                    <div>
                        <p>123 Housing socitey</p>
                        <p>Somalia</p>
                    </div>
                 

                </div>
                <div className='location'>
                    <FaPhone size={20} style={{color:'white', marginRight:'1rem'} }/>
                    <div>
                        
                        <p>0612702631</p>
                    </div>
                    <div className='location'>
                    <FaMailBulk size={20} style={{color:'white', marginRight:'1rem'} }/>
                    <div>
                   
                        <p>Ayman@gmail.com</p>
                    </div>
                 

                </div>
                 

                </div>
            </div>


            <div className='right'>
                <h4>About Website</h4>
                <p>
                    MY NAME AYMAN IAM WEBSITE PERSON      MY NAME AYMAN IAM WEBSITE PERSON  
               

                </p>
                <div className='social'>
                <FaFacebook size={20} style={{color:'white', marginRight:'1rem'} }/>
                <FaLink size={20} style={{color:'white', marginRight:'1rem'} }/>
                <FaWhatsapp size={20} style={{color:'white', marginRight:'1rem'} }/>


                </div>

            </div>
        </div>
    </div>
  )
}
