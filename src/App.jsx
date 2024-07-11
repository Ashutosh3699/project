import Navbar from "./components/Navbar";
import {Outlet} from  "react-router-dom"


function App() {


  return (
  
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto">
    <div  className="w-full ">
      <Navbar/>
    </div>

    <Outlet/>

    

    </div>
  )
}

export default App
