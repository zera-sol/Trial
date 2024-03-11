import React from "react";
import "./index.css"
import NavBar from "./compnents/Nav";
import Hero from "./compnents/Hero";
import Button from "./compnents/button";
import SideBar from "./compnents/Sidebar";

function App(){
    return(
    <div>
       <NavBar />
       <Hero />
       <Button />
       <SideBar/>
    </div>
    )
}  

export default App;