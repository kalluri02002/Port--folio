import {React} from "react"
import "./floating.css"
export const Flotinting=( {tum,ti,croun})=>{
    return(
    <div className="floatingdiv">
        <img  src={croun} alt="king"/>
        
        <span>
            {ti}
            <br/>
            {tum}
        </span>

    </div>)
}