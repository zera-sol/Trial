import React from "react";
import "./index.css"
import NavBar from "./compnents/Nav";
import Hero from "./compnents/zera";
import RenderServices from "./servicerender";
import  SignIn from "./compnents/authenticate";

function App(){
    return(
    <div className="boo">
       
       <NavBar />
       <SignIn/>
       <Hero />
       <RenderServices />

    </div>
    )
}  

export default App;