import React from "react";
import { useState } from "react";
import useFetch from "../useFetch";


function Home({zera}){
    const [id, setId] = useState(null)
       const Blog = useFetch("http://localhost:9000/Blogs")

      function findId(obj){
        setId(obj.id)
     }
    
    return(
        <div className="all_blog">            
                {
                    Blog.map((a) => (
                     <a href="/detail">
                        <div className="blog" onClick={zera}>
                           
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