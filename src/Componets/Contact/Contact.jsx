import "./contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { themecontex } from "../../Contex"
import { useContext } from "react"

export const Contact =()=>{
       const theam=useContext(themecontex)
       const darkmode=theam.state.darkmode
        const[bsend ,set]=useState(false)
    
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_5q5x5yo', 'template_2xcbvkg', form.current, 'FanHNS-LOGfpY1qfX')
            .then((result) => {
                console.log(result.text);
                set(true)
            }, (error) => {
                console.log(error.text);
            });
        };
    return(
        <div className="contact-form" id="contact">
            <div className="w-left">
                <div className="awesome">
                    <span style={darkmode ? {color:"white"}:{color:"black"}}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur" style={{background:"#ABF1FF94"}}>
                        

                    </div>

                </div>


            </div>
            <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                 
                 <input type="text" name="user_name" className="user" placeholder="name"/>
                
                 <input type="email" name="user_email" className="user" placeholder="email"/>
                 
                 <textarea name="message" className="user"placeholder="message" />
                 <input type="submit" value="Send" className="button "/>
                 <span>{bsend && <h1 style={{color:"green"}}>succcess fully submited</h1>}</span>
                 
           </form>
               
               
  

  
   
  

                        


            </div>

        </div>
    )
}