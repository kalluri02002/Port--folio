import "./Intro.css"
import{Link}from "react-scroll"
import React  from "react";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import insta from "../../img/instagram.png";
import Vector from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"

import boy1 from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import glass from "../../img/glassesimoji.png"
import crown from "../../img/crown.png"
import { Flotinting } from "../floatingdiv/floating";
import { themecontex } from "../../Contex"
import { useContext } from "react"
import {motion } from "framer-motion"


export const Intro=()=>{
  const transition={duration:2,type:"spring"}
  const theam=useContext(themecontex)
  const darkmode=theam.state.darkmode
    return(
        <div className="intro">
            <div className="L-intro">
                <div className="L-name">
                    <span  style={darkmode ?{color:"white"} :{color:"black"}}>Hy! I am</span>
                    <span>Kalluri Naveen</span>
                    <span style={darkmode ?{color:"white"} :{color:"black"}}>
                        Frontend Developer with high level of experience in web 
                        designing and development, producting the Quality work
                    </span>
                </div>
                <Link spy="true" to="contact" smooth={true}>
                          
                  <button className=" button i-button kallbt" > Hire Me</button>
                </Link>
                <div className=" l-icon ">
                    <a href="https://www.linkedin.com/in/kalluri-naveen-741926208/">
                      <img src={Linkedin} alt=""/>
                    </a>
                    <a href="https://github.com/kalluri02002">
                      <img src={Github} alt=""/>

                    </a>
                    <a href="https://www.instagram.com/naveen.kalluri/">
                     <img src={insta} alt=""/>

                    </a>
                    
                    
                </div>
               



            </div>
            <div className="R-intro">
                <img src={Vector} alt=""/>
                <img src={Vector2} alt=""/>
                <img src={boy1} alt=""/>
                <motion.img
                initial={{left:"-36%"}}
                whileInView={{left:"-26%"}}
                transition={transition}
                className="na"
                src={glass} alt=""/>
                <motion.div 
                    initial={{top:"-4",left:"50%"}}
                    whileInView={{left:"60%"}}
                transition={transition}
                className="crown"
                style={{top:"-6%",left:"58%",transform:"scale(1.8)"}}>
                  <Flotinting croun={crown} ti="web" tum="developer"/>

                </motion.div>
                <motion.div 
                initial={{top:"15.5rem",left:"9rem"}}
                whileInView={{left:"-0.5rem"}}
                transition={transition}>
                  <Flotinting croun={thumbup} ti="best" tum="design award"/>

                </motion.div>
                <div className="blur" style={{background:"rgb(238 210 255)"}}> </div>
                <div className="blur2" style={{background:"#C1F5FF"}}> </div>

               

            </div>

        </div>
    )

}