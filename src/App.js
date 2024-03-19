import React from "react";
import "./index.css"
import NavBar from "./compnents/Nav";
import Hero from "./compnents/zera";
import RenderServices from "./servicerender";
import { ToastContainer} from 'react-toastify';

function App(){
    const toasStyle = {
         height: "100vh",
         width: "300px",
         marginRight: "100px",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         backgroundColor: "#2FB4CE"
    }
    return(
    <div className="boo">
       <NavBar />
       <Hero />
       <RenderServices />
       <ToastContainer 
                toastStyle={toasStyle}            
                />

    </div>
    )
}  

export default App;