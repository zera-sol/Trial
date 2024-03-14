import React from "react";
import "./index.css"
import NavBar from "./compnents/Nav";
import Hero from "./compnents/zera";
import RenderServices from "./servicerender";

function App(){
    return(
    <div>
       <NavBar />
       <Hero />
       <RenderServices />
    </div>
    )
}  

export default App;