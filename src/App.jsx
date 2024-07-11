import Navbar from "./components/Navbar";
import {Outlet} from  "react-router-dom"


function App() {


  return (
  
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto">
    <div  className="w-full px-4  py-5">
      <Navbar/>
    </div>

    <Outlet/>

    

    </div>
  )
}

export default App
