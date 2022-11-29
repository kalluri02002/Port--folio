import React from "react"
import "./Navbar.css" 
import{Link}from "react-scroll"
import { Toggle } from "../Toggle/Toggle"
export const Navbar=()=>{
    return(
        <div className="n-wrapper" id="navabar">
            <div className="n-left">
                <div className="n-name"> Kalluri Naveen</div>
                <Toggle/>
                

            </div>
            <div className="n-right">
                <div className="l-list">
                    <ul style={{listStyleType:"none"}}>
                        <Link spy="true" to="navabar" smooth={true}>
                          <li className="naa">Home</li>
                        </Link>
                        <Link spy="true" to="service" smooth={true}>
                          <li className="naa">Services</li>
                        </Link>
                        <Link spy="true" to="experi" smooth={true}>
                          <li className="naa">Experience</li>
                        </Link>
                        <Link spy="true" to="port" smooth={true}>
                          <li className="naa">Portfolio</li>
                        </Link>
                        <Link spy="true" to="testmonial" smooth={true}>
                          <li className="naa">Testimonial</li>
                        </Link>
                        
                        
                        
                        
                    </ul>
                </div>
                <div>
                      <Link spy="true" to="contact" smooth={true}>
                      
                          <button className="button n-button">Contact</button>
                        </Link>

                </div>

            </div>

        </div>
    )
}