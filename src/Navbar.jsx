import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import{AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Navbar() {
    const [nav,setNav]=useState(false)
    const [color,setColor]=useState(false)

    const changecolor=()=>{
        if(window.scroll>=100){
            setColor(true)
        } else{
            setColor(false)

        }
    }

    const handleClick=()=>{
        setNav(!nav)
    }

    window.addEventListener("scroll",changecolor)

    const sero=()=>{
        toast.success('Menu fur open!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // progress: undefined,
            theme: "colored",
            });

    }
    
    const close=()=>{
        toast.success('Menu xidh close!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

    }

  return (
    <>
    <div className={color ? "header header-bg" :"header"}>
        <div className="logo">
            <h1>Ayman</h1>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburge" onClick={()=>setNav(!nav)}>
            {
                nav ? <AiOutlineClose onClick={close} className='close' size={30} style={{color:'red'}}/> :<AiOutlineMenu onClick={sero} size={20} style={{color:'white'}}/>
            }
            
        </div>
    </div>
    <ToastContainer/>
    </>
   
    
  )
}
