import React from "react";
// import { useEffect, useState } from "react";
import useFetch from "../useFetch";
function  Blog(){
  let deta = useFetch('http://localhost:9000/Blogs');
         
    return(
                deta.filter(a => a.id === '2').map((a) => (
                  <div>
                    <h1>Title: {a.title}</h1>
                    <h3>Author: {a.author}</h3>
                    <p>{a.detail}</p>
                  </div>
                ))
            
    )
}

export default Blog;