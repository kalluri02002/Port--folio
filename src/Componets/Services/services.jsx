import React from "react"
import "./Services.css"
import Hertemohji from "../../img/heartemoji.png"

import Humble from "../../img/humble.png"
import { Card } from "../Card/card"
import remume from "./king.pdf"
import { themecontex } from "../../Contex"
import { useContext } from "react"
import {motion } from "framer-motion"
export const Services=()=>{
    const transition={duration:2,type:"spring"}
    const theam=useContext(themecontex)
    const darkmode=theam.state.darkmode
    return(
        <div className="Services" id="service" >
            <div className="awesome "  >
                <span style={darkmode ? {color:"white"}:{color:"black"}}>My Awesome</span>
                <span >services</span>
                <span style={darkmode ? {color:"white"}:{color:"black"}}>
                    I have good experince with frontend and backend
                    <br/>
                    developed more than 10 web apps
                </span>
                <a href={remume} download="kalluriCV"> 

                 <button className="button s-button"> Download cv</button>
                </a>
                <div className="blur s-brur" style={{background:"#ABF1FF94"}}>

                </div>

            </div>
            <div className="cards ">
                <motion.div 
                    className="card1"
                    whileInView={{left:"40rem"}}
                    initial={{left:"15rem"}}
                    
                    transition={transition} 
                    style={{ left:"40rem", position:"relative",transform:"scale(1.8)"}} >
                    <Card 
                    emoji={Hertemohji}
                    heading={"Developer"}
                    detail={"Html,Css,Javascript,React"}

                     />
                </motion.div>
                <motion.div 
                    className="card2"
                    initial={{left:"10rem"}}
                    whileInView={{left:"10rem"}}
                    transition={transition}
                    style={{left:"10rem",position:"absolute",transform:"scale(1.8)"}} >
                    <Card style={{position:"relative",left:"30rem"}}
                    emoji={Humble}
                    heading={"UI/UX"}
                    detail={"I am practice and every website UI"}

                     />
                </motion.div>
               
              

            </div>
        </div>
    )
}