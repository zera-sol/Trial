import React from "react";

function Blog(props){
    return(
        <div>
            <h1> Title: {props.title}</h1>
            <h3> Author: {props.author}</h3>
            <p>  {props.detail}</p>
        </div>
    )
}

export default Blog;