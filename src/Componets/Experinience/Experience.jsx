import "./Experience.css"
import { themecontex } from "../../Contex"
import { useContext } from "react"
export const Expeience=()=>{
    const theam=useContext(themecontex)
    const darkmode=theam.state.darkmode
    return(
        <div className="Expience" id="experi">
            <div className="achivemeys">
                <div className="circle" style={darkmode ? {color:"black"}:{color:"black"}}>1+</div>
                <span>years</span>
                <span>Experience</span>

            </div>
            <div className="achivemeys">
                <div className="circle" style={darkmode ? {color:"black"}:{color:"black"}}>20+</div>
                <span>completed</span>
                <span>projects</span>

            </div>
            <div className="achivemeys">
                <div className="circle" style={darkmode ? {color:"black"}:{color:"black"}}>1+</div>
                <span>internship</span>
                <span>Experience</span>

            </div>
        </div>
    )
}