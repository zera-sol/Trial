import React from "react";
import "./index.css"
import NavBar from "./compnents/Nav";
import Hero from "./compnents/zera";
import RenderServices from "./servicerender";
import  SignIn from "./compnents/authenticate";
import Projects from "./compnents/Project";
import AddForm from "./compnents/form";

function App(){
    return(
    <div className="boo">
       
       <NavBar />
       <AddForm />
       <SignIn/>
       <Projects />
       <Hero />
       <RenderServices />
    </div>
    )
}  

export default App;