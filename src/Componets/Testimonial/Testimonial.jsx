import "./Testimonial.css"
import { Swiper ,SwiperSlide } from "swiper/react"
import pro1 from "../../img/profile1.jpg"
import pro2 from "../../img/profile2.jpg"
import pro3 from "../../img/profile3.jpg"
import pro4 from "../../img/profile4.jpg"
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import "swiper/css";
export const Tesimonial=()=>{
    const clients=[
        { 
            img:pro1,
            review:"I wonderd he was doing excellent I give my brojext to him"

        },
        { 
            img:pro2,
            review:"I wondvdf,vcxvd grtiuugmfdnrtf gfbfl ndfl.vdf v;silf,bnfhunc,m mdjmxvc,.c ddkvdad.dscdkccjldkjdvdkn dcnlkdnvdsvksdjja;hdfhdv;silfjadslfkjsdlvoko'pgirgerindclmdvoerd he was doing excellent I give my brojext to him"

        },
        { 
            img:pro3,
            review:"I wonderd he was doing excdvaewro43m e igi er irnerwf.lsfdfvellent I give my brojext to him"

        },
        { 
            img:pro4,
            review:"I wonderd he was doing edfvnrgv trgibnerkt h,sirh gskhsrssrkbdnvhudjbgmdrngbdnmhvdghurkndf vdfv huierv ,,,sesdkrgns,gdfbxcellent I give my brojext to him"

        }
    ]
    return (
        <div className="t-wrappeer" id="testmonial">
          <div className="T-heading">
                <span>Clients  always get</span>
                <span> Exceptional Work </span>
                <span>From me</span>
                <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
                <div className="blur t-blur2" style={{background:"skyblue"}}></div>
                
           </div>
           {/* slider */}
           <Swiper modules={[Pagination]}
           slidesPerView={1}
           pagination={{clickable:true}}>
             { clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="Tesimonial">

                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>

                    </SwiperSlide>
                );
              })}
            
           </Swiper>

        </div>

       
    )

}