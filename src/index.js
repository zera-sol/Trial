import React from "react";
import ReactDOM from "react-dom"
import "./index.css";
import Header from "./Header";
import Body from "./Body";
import Meme from "./Meme";
import Counter from "./counter";
import Form from "./form";
import Zera from "./zera";

ReactDOM.render(
    <div>
       <Header />
       <Zera />
       <Form />
       <Counter />       
       <Meme />       
       <Body />
    </div>
         , document.getElementById("root")
)