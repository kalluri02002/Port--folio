import "./Portpolio.css"
import {Swiper,SwiperSlide} from "swiper/react"
import Sidebar from "../../img/sidebar.png"
import Ecommerse from "../../img/ecommerce.png"
import hoc from "../../img/hoc.png"
import Musicap from "../../img/musicapp.png"
import 'swiper/css'
import { themecontex } from "../../Contex"
import { useContext } from "react"
export const Portfolio=()=>{
    const theam=useContext(themecontex)
    const darkmode=theam.state.darkmode
    return(
        <div className="Portfolio" id="port">
            <span style={darkmode ? {color:"white"}:{color:"black"}}>Recent Projects</span>
            <span>Portfolio</span>
            <Swiper spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="Portfolio-slide">
                <SwiperSlide>
                    <img src={Sidebar} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerse} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={hoc} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={Musicap} alt="" />

                </SwiperSlide>
            </Swiper>
            
        </div>
    )
}