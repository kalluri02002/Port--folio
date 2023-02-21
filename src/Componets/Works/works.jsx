import "./works.css";
import { Link } from "react-scroll";
import Upwork from "../../img/Upwork.png";
import fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import shopipy from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themecontex } from "../../Contex"
import { useContext } from "react"
import {motion } from "framer-motion"

import "../Services/services"
export const Work=()=>{
    const theam=useContext(themecontex)
    const darkmode=theam.state.darkmode
    return(
        <div className="works">
            <div className="awesome ">
                <span style={darkmode ? {color:"white"}:{color:"black"}}>Work for All these</span>
                <span>Brands & Clients</span>
                <spane style={darkmode ? {color:"white"}:{color:"black"}}>
                    I Worked as intern in RentEra as a front End developer
                    <br/>
                    and anothor side am freelancer in fiverr
                    <br />
                    good Experience with fontend and back-end
                </spane>
                <Link spy="true" to="contact" smooth={true}>
                          
                  

                   <button className="button s-button"> Hire Me</button>
                </Link>
                
                <div className="burr s-brur" style={{background:"#ABF1FF94"}}>

                </div>

            </div>
            <div
                
                className="w-right">
                <motion.div 
                    initial={{rotate:45}}
                    whileInView={{rotate:0}}
                    viewport={{margin:"40px"}}
                    transition={{duration:3.5,type:"spring"}}
                    className="main-circle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />

                    </div>
                    <div className="w-secCircle">
                        <img src={fiverr} alt="" />

                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />

                    </div>
                    <div className="w-secCircle">
                        <img src={shopipy} alt="" />

                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />

                    </div>
                  

                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>


        </div>
        

        
    )
}