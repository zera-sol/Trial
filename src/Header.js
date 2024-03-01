import React from "react";

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