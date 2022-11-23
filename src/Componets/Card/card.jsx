import React from "react";
import "./card.css"
export const Card=({emoji,heading,detail})=>{
    return(
        <div className="Card" >
         <img src={emoji} alt="" />
         <span>{heading}</span>
         <span>{detail}</span>
         <button className="c-buuton">Lern More</button>
        </div>
    )
}
