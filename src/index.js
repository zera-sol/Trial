import React from "react";
import ReactDOM from "react-dom"
import "./index.css";
import Header from "./Header";
import Body from "./Body";
import Person from "./props";



ReactDOM.render(
    <div>
       <Header />
       <Person 
          name = "Zerihun"  
          age = {21 }
          department = "Computer Science"/>
       <Person />
       <Body />
    </div>
         , document.getElementById("root")
)