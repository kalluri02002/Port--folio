import React from "react"
import "./Services.css"
import Hertemohji from "../../img/heartemoji.png"
import glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import { Card } from "../Card/card"
import remume from "./12.pdf"
export const Services=()=>{
    return(
        <div className="Services" id="service">
            <div className="awesome " >
                <span>My Awesome</span>
                <span>services</span>
                <span>
                    I have good experince with frontend and backend
                    <br/>
                    developed more than 10 web apps
                </span>
                <a href={remume} download="kalluriCV"> 

                 <button className="button s-button"> Download cv</button>
                </a>
                <div className="burr s-brur" style={{background:"#ABF1FF94"}}>

                </div>

            </div>
            <div className="cards ">
                <div  >
                    <Card 
                    emoji={Hertemohji}
                    heading={"Developer"}
                    detail={"Html,Css,Javascript,React"}

                     />
                </div>
                <div  >
                    <Card 
                    emoji={Humble}
                    heading={"UI/UX"}
                    detail={"I am practice and every website UI"}

                     />
                </div>
              

            </div>
        </div>
    )
}