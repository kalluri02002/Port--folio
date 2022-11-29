import "./footer.css"
import wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Face from "@iconscout/react-unicons/icons/uil-facebook"
import Githu from "@iconscout/react-unicons/icons/uil-github"
export const Footer=()=>{
    return(<div className="foot">
        <img src={wave} alt="" style={{width:"100%"}}/>
        <div className="f-content">
            <span>kallurinaveen02002@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size="3rem"/>
                <Face color='white' size="3rem"/>
                <Githu color='white' size="3rem"/>

            </div>

        </div>
        

    </div>)
}