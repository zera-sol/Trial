import React from "react";
import { useState } from "react";
import useFetch from "../useFetch";


function Home(){
       const Blog = useFetch("http://localhost:9000/Blogs")
    return(
        <div className="all_blog">            
                {
                    Blog.map((a) => (
                     <a href="/detail">
                        <div className="blog" >
                           
                           <h2>{a.title}</h2>
                           <h4>Written by {a.author}</h4>
                           <p>{a.detail}</p>
                       </div>
                     </a> 
                    )                     
                    )
                }           
        </div>
    )
}
export default Home;