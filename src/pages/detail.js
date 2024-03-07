import React from "react";
import useFetch from "../useFetch";
import Blog from "../compnents/blog";

function findId(obj){
    return obj.id;
   }
function Detail(){
    const data =  useFetch("http://localhost:9000/Blogs")
    let zz = data.filter((a) => a.id === 2)
    return(
        <div>
            <Blog 
                key={zz.id}
                title =  {zz.title}
                detail = {zz.detail}
                author = {zz.author}/>
        </div>
    )
}
export default Detail;