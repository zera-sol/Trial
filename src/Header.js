import React from "react";
import data from "./data.js";

data.push({
   image:require("./images/zera.jpg"),
   name:"Keyo",
   age : 22,
   department: "Accounting"
})
data.push({
   image: require("./images/msg632510844-92729.jpg"),
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