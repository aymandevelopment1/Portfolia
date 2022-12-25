import React from 'react'
import { Link } from 'react-router-dom'
import './style/PricingCard.css'

export default function PricingCard() {
  return (
    <div className='Pricing'>
      j
        <div className='Card-container'>
            <div className='card'>
                <h3>Basic</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>- 3 days</p>
                <p>- 3 pages</p>
                <p>- feature</p>
                <p>-  responsive</p>
                <Link to="/contact" className='btn'>
                    Purchase
                </Link>
            </div>
            <div className='card'>
                <h3>Basic</h3>
                <span className='bar'></span>
                <p className='btc'>$ 200</p>
                <p>- 4 days</p>
                <p>- 3 pages</p>
                <p>- feature</p>
                <p>-  responsive</p>
                <Link to="/contact" className='btn'>
                    Purchase
                </Link>
            </div>
            <div className='card'>
                <h3>Basic</h3>
                <span className='bar'></span>
                <p className='btc'>$ 300</p>
                <p>- 3 days</p>
                <p>- 3 pages</p>
                <p>- feature</p>
                <p>-  responsive</p>
                <Link to="/contact" className='btn'>
                    Purchase
                </Link>
            </div>
        </div>
        
    </div>
  )
}
