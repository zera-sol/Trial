import React from "react";
import data from "./data.js";

data.push({
   name:"Keyo",
   age : 22,
   department: "Accounting"
})
data.push({
   name: "Yimu",
   age: 19,
   department: "Nurse"
})
const logo = require('./compnents/logo192.png') 
      export default function Header(){
         return(
         <div className="header">
            <img className="logo" src={logo} alt="my_logo"/>
            <ul>
               <li>Home</li>
               <li>Chart</li>
               <li>Contact</li>
               <li>Message</li>
            </ul>
         </div>)
      }