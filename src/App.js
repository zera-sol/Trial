import React from "react";
import "./index.css"
import NavBar from "./compnents/Nav";
import Hero from "./compnents/zera";
import RenderServices from "./servicerender";
import  SignIn from "./compnents/authenticate";
import Projects from "./compnents/Project";

function App(){
    return(
    <div className="boo">
       
       <NavBar />
       <SignIn/>
       <Projects />
       <Hero />
       <RenderServices />
    </div>
    )
}  

export default App;