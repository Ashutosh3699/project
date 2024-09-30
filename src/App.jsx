import Footer from "./components/common/footer/Footer";
import Navbar from "./components/common/Navbar";
import {Outlet} from  "react-router-dom";


function App() {

  return (
  
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto relative">

      <div  className="w-full  z-50  sticky top-0  ">
        <Navbar/>
      </div>

      <div className=" w-full">
          <Outlet/>
          <Footer/>
      </div>

    </div>
  )
}

export default App
