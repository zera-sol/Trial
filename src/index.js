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
         attendance = {a.attendance}
         key = {a.id}
         image = {a.image}
         name = {a.name}
         age = {a.age}
         department = {a.department}/>
   )
})
for(let i = 0; i < data.length; i++){
   console.log([data[i].name, data[i].id])
}

ReactDOM.render(
    <div>
       <Header />
       {studentFile}
       <Body />
    </div>
         , document.getElementById("root")
)