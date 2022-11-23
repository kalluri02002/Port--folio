import React from "react"
import "./Navbar.css" 
import{Link}from "react-scroll"
export const Navbar=()=>{
    return(
        <div className="n-wrapper" id="navabar">
            <div className="n-left">
                <div className="n-name"> Kalluri Naveen</div>
                

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
                        
                        
                        
                    </ul>
                </div>
                <div>
                    <button className="button n-button">Contact</button>

                </div>

            </div>

        </div>
    )
}