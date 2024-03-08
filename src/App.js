import React from "react";
import "./index.css"
import Navbar from "./compnents/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AddBlog from "./pages/blogs";
import Home from "./pages/Home"
import Blog from "./compnents/blog";
import {useState }from "react"


function App(){
 const [id, setId] = useState(null)
    function findId(obj){
        setId(obj.id)
    }
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/blog">
                        <AddBlog />
                    </Route>
                    <Route path="/detail">
                        <Blog />
                    </Route>
                </Switch>
            </div>        
        </Router>
    )
}  

export default App;