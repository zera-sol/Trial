import React, { useEffect, useState } from "react";

function  Blog(a){
   
    return(
                
                  <div>
                    <h1>Title: {a.title}</h1>
                    <h3>Author: {a.author}</h3>
                    <p>{a.detail}</p>
                    <button className="btn_delete">Delete Blog</button>
                  </div>
                )
            
    
}

export default Blog;