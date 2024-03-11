import React from "react";
import "./index.css"
import Navbar from "./compnents/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AddBlog from "./pages/blogs";
import Home from "./pages/Home"
import Blog from "./compnents/blog";
import {useState }from "react"
import useFetch from "./useFetch";


function App(){
let data = useFetch("http://localhost:9000/Blogs")
let [display, setDisplay] = useState(false)
let [id, setId] = useState("")
function findId(obj){
    setId(obj.id)
    setDisplay(true)
}
        let home = data.map((a) => (
            <Home 
                key={a.id}
                title={a.title}
                author={a.author}
                detail={a.detail}
                handleClick={()=>findId(a)}
            />       
 ))
        let pass = id;
        let detail = data.filter((a) => a.id === pass).map((a) => (
            
            <Blog 
                key={a.id}
                title={a.title}
                author={a.author}
                detail={a.detail}
                />
        ))
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        {display ? detail : home}
                    </Route>
                    <Route path="/blog">
                        <AddBlog />
                    </Route>
                </Switch>
            </div>        
        </Router>
    )
}  

export default App;