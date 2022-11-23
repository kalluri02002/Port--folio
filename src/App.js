
import{Navbar} from "./Componets/Navbar/Navbar"
import{Intro} from "./Componets/Intro/Intro"
import {Services} from "./Componets/Services/services"
import { Expeience } from "./Componets/Experinience/Experience"
import "./App.css"
function App() {
  return (
    <div className="App">
       
       <Navbar/>
       <Intro/>
       <Services/>
       <Expeience/>
    </div>
  );
}

export default App;
