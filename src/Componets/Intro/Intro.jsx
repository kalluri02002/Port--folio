import "./Intro.css"
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





export const Intro=()=>{
    return(
        <div className="intro">
            <div className="L-intro">
                <div className="L-name">
                    <span>Hy! I am</span>
                    <span>Kalluri Naveen</span>
                    <span>
                        Frontend Developer with high level of experience in web 
                        designing and development, producting the Quality work
                    </span>
                </div>
                <button className=" button i-button"> Hire Me</button>
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
                <img src={glass} alt=""/>
                <div style={{top:"-6%",left:"58%"}}>
                  <Flotinting croun={crown} ti="web" tum="developer"/>

                </div>
                <div style={{top:"67%" ,left:"-10%" }}>
                  <Flotinting croun={thumbup} ti="best" tum="design award"/>

                </div>
                <div className="blur" style={{background:"rgb(238 210 255)"}}> </div>
                <div className="blur2" style={{background:"#C1F5FF"}}> </div>

               

            </div>

        </div>
    )

}