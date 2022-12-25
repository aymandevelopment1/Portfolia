import React from 'react'
import './style/WorkCard.css'
import pro1 from '../assets/project1.png'
import pro2 from '../assets/project2.png'
import pro3 from '../assets/project3.png'
import pro4 from '../assets/project4.png'

import WorkCard from './WorkCard'
// import WorkData from './WorkData'



export default function Work() {
    const projectsCard=[
        {
            imgsrc:"https://static.wixstatic.com/media/84770f_1e775f8cf3bd4a3b97bcf6368528e01b.jpg/v1/fill/w_1349,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_1e775f8cf3bd4a3b97bcf6368528e01b.jpg",
            title:"Ecomerce webside",
            text:"The framework or tool your website is built with. Examples include Shopify, BigCommerce, Wix, etc.",
            view:"https://www.ecommerceceo.com/learn/ecommerce-website/"
    
        },
        {
            imgsrc:"https://static.wixstatic.com/media/dea07e_e1c59359abe949d7b9530faf933af3c5~mv2.jpg/v1/fill/w_138,h_265,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Template%204.jpg",
            title:"Fashion",
            text:"The framework or tool your website is built with. Examples include Shopify, BigCommerce, Wix, etc.",
            view:"https://www.ecommerceceo.com/learn/ecommerce-website/"
    
        },{
            imgsrc:"https://static.wixstatic.com/media/dea07e_0734c2ae9aea48f5a6a05211d21fa7db~mv2.jpg/v1/fill/w_138,h_265,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Template%202.jpg",
            title:"Beauty & Wellness",
            text:"The framework or tool your website is built with. Examples include Shopify, BigCommerce, Wix, etc.",
            view:"https://www.ecommerceceo.com/learn/ecommerce-website/"
    
        },{
            imgsrc:"https://static.wixstatic.com/media/dea07e_adf7b4e80df74884926ee7f4cb67b8e6~mv2.jpg/v1/fill/w_460,h_265,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Template%203.jpg",
            title:"Home & Decor",
            text:"The framework or tool your website is built with. Examples include Shopify, BigCommerce, Wix, etc.",
            view:"https://www.ecommerceceo.com/learn/ecommerce-website/"
    
        },{
            imgsrc:"https://static.wixstatic.com/media/dea07e_18a25df83b2047d2b5036adf5c0ee84a~mv2.jpg/v1/fill/w_460,h_265,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Template%206.jpg",
            title:"Electronics",
            text:" Control your home enviroment from the palm of your hand with EZ",
            view:"https://www.ecommerceceo.com/learn/ecommerce-website/"
    
        },{
            imgsrc:"https://static.wixstatic.com/media/dea07e_1961358411ca4d0da6acadf7125136ad~mv2.jpg/v1/fill/w_460,h_265,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Template%205.jpg",
            title:"Food & Drinkse",
            text:"It's Always Tea Time  With Bloom's Herbal Tea .",
           
            view:"https://www.ecommerceceo.com/learn/ecommerce-website/"
    
        },
    
    
    
    
    
    ]
  return (
    <div className='work-container'>
        <h1 className='project-heading'>
            Projects
           

        </h1>
        <div className='project-container'>
          {
            projectsCard.map((val,index)=>{
                return(
                    <WorkCard key={index} imgsrc={val.imgsrc}
                     title={val.title} text={val.text} view={val.view}/>
                )

            })
          }
           

        </div>
        
    </div>
  )
}
