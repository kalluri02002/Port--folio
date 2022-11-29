import "./Toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import { themecontex } from "../../Contex"
import { useContext } from "react"
export const Toggle=()=>{
    const theam=useContext(themecontex)
    const darkmode=theam.state.darkmode
    const handleClick=()=>{
        theam.dispatch({type:"toggle"})

    }
    return(
        <div className="Toggle" onClick={handleClick}>
            <Moon/>
            <Sun/>
            <div className="t-button" 
            style={darkmode ? {left:"2px"} :{right:"2px"}}>
                

            </div>
        

        </div>
    )
}