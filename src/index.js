import React from "react";
import ReactDOM from "react-dom"
import "./index.css";
import Header from "./Header";
import Body from "./Body";
import Meme from "./Meme";
import Counter from "./counter";
import Form from "./form";
import PropsGenerator from "./popsGenerator";

ReactDOM.render(
    <div>
       <Header />
       <Form />
       <Counter />       
       <Meme />       
       <PropsGenerator />
       <Body />
    </div>
         , document.getElementById("root")
)