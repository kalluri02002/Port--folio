
import{Navbar} from "./Componets/Navbar/Navbar"
import{Intro} from "./Componets/Intro/Intro"
import {Services} from "./Componets/Services/services"
import { Expeience } from "./Componets/Experinience/Experience"
import "./App.css"
import { Work } from "./Componets/Works/works"
import{Portfolio}from "./Componets/PortFolio/Portfolio"
import { Tesimonial } from "./Componets/Testimonial/Testimonial"
import { Contact } from "./Componets/Contact/Contact"
import { Footer } from "./Componets/Footer/footer"
import {themecontex} from "./Contex"
import{useContext} from "react"
function App() {
  const theme=useContext(themecontex);
  const darkmode=theme.state.darkmode
  return (
    <div className="App" style={{
      background:darkmode ? "black":"",
      color:darkmode ? "white":""
    }}>
       
       <Navbar/>
       <Intro/>
       <Services/>
       <Expeience/>
       <Work/>
       <Portfolio/>
       <Tesimonial/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
