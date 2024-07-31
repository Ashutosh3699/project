import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import {Outlet} from  "react-router-dom";
import { useState } from "react";


function App() {


  // const [color,setColor] = useState("transparent");
  // let val = 0;
  // window.addEventListener('scroll',()=>{
    
  //  val =  (window.scrollY );
  //   console.log(val)
  //   if(val <= 100){
  //     setColor("transparent");
  //     console.log("red")
  //   }
  //   else{
  //     setColor("white");
  //     console.log("white")
  //   }
    
  // });
  
  console.log(window);

  return (
  
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto relative">
    <div  className="w-full  z-50  sticky top-0  "
    //  style={{"backgroundColor":color}}
    >
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
