import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Message from "./pages/message";
const logo = require('./compnents/logo192.png') 
      export default function Header(){
         return(
         <div className="header">
            <img className="logo" src={logo} alt="my_logo"/>
            <ul>
               <Switch>
                  <Route path="/" exact component={Home} >
                   <li>Home</li>
                  </Route>
                  <Route path="/cart" exact component={Cart} >
                    <li>Chart</li>
                  </Route>
                  <Route path="/contact" exact component={Contact} >
                    <li>Contact</li>
                  </Route>
                  <Route path="/messege" exact component={Message} >
                    <li>Message</li>
                  </Route>
               </Switch>
               
               
               
               
            </ul>
         </div>)
      }