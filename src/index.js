import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Header";
import Body from "./Body";
import Meme from "./Meme";
import Counter from "./counter";
import Form from "./form";
import Zera from "./zera";

ReactDOM.render(
    <div>
      <Switch>
         <Route path="/" exact component={Form} ></Route>
         <Route path="/header" exact component={Header} ></Route>
         <Route path="/meme" exact component={Form} ></Route>
         <Route path="/" exact component={Form} ></Route>
      </Switch>
       <Header />
       <Zera />
       <Form />
       <Counter />       
       <Meme />       
       <Body />
    </div>
         , document.getElementById("root")
)