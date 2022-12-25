import { Button } from 'bootstrap'
import React from 'react'
import './style/Form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Form() {

    const diffToast=()=>{
        toast('Please Email gali!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
   
  return (

    <>
     <div className='form'>
        <form>
            <label>Your name</label>
            <input type="text"/>
            <label>Email</label>
            <input type="text"/>
            <label>Subject</label>
            <input type="text"/>
            <label>massage</label>
           <textarea rows="6" placeholder="Type Your Mesage "/>
           {/* <Button className="btn">Submit</Button> */}
           <button onClick={diffToast} className='btn'>Submit</button>
           
        </form>
     
    </div>
      <ToastContainer/>
    </>
   
   
  )
}
