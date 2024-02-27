import React from "react";
import ReactDOM from "react-dom"
import "./index.css";
import Header from "./Header";
import Body from "./Body";
import Person from "./props";
import data from "./data";

const studentFile =  data.map((a)=>{
   return (
      <Person  
         image = {a.image}
         name = {a.name}
         age = {a.age}
         department = {a.department}/>
   )
})

ReactDOM.render(
    <div>
       <Header />
       {studentFile}
       <Body />
    </div>
         , document.getElementById("root")
)