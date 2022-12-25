import React from 'react'
import './style/WorkCard.css'
// import pro1 from '../assets/project1.png'
import { NavLink } from 'react-router-dom'

export default function WorkCard(props) {
  return (
    <div className='project-card'>
        
    <img  src={props.imgsrc} alt="/"/>
    <h2 className='project-title'>{props.title}</h2>
    <div className='pro-details'>
        <p>{props.text}</p>
        {/* <p>Project: Website is a nonprofit organization that provides websites to other nonprofits at no cost. Inspired by a high school project,
             Project: Website has transformed from a simple idea to a nonprofit organization.
By providing free websites for nonprofits around the world, we enable
them to more effectively serve their constituents, leading the way for social change in this digital age</p> */}
<div className='pro-btn'>
<NavLink className="btn" to={props.view} >View</NavLink>
<NavLink className="btn" to="url.com" >Source</NavLink>
</div>
    </div>
</div>
  )
}
