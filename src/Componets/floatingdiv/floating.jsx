import {React} from "react"
import "./floating.css"
import { themecontex } from "../../Contex"
import { useContext } from "react"
export const Flotinting=( {tum,ti,croun})=>{
    const theam=useContext(themecontex)
    const darkmode=theam.state.darkmode
    return(
    <div className="floatingdiv" >
        <img  src={croun} alt="king"/>
        
        <span style={darkmode ?{color:"black"} :{color:"black"}}>
            {ti}
            <br/>
            {tum}
        </span>

    </div>)
}