import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import {Outlet} from  "react-router-dom"


function App() {


  return (
  
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto relative">
    <div  className="w-full  z-10  sticky top-0">
      <Navbar/>
    </div>

    <Outlet/>
    
    <Footer/>

    </div>
  )
}

export default App
