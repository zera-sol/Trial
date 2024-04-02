import React from "react";
import "./index.css"
import NavBar from "./compnents/Nav";
import Hero from "./compnents/zera";
import RenderServices from "./servicerender";
import  SignIn from "./compnents/authenticate";
import Projects from "./compnents/Project";
import AddForm from "./compnents/form";
// import YourComponent from "./compnents/project2";

function App(){
    return(
    <div className="boo">
       
       <NavBar />
       <SignIn/>
       <Projects />
       <Hero />
       <RenderServices />
       <AddForm />
    </div>
    )
}  

export default App;