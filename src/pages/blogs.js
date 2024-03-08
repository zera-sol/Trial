import React, { useState } from "react";
import useFetch from "../useFetch";


function AddBlog(){
    const data = useFetch("http://localhost:9000/Blogs");
    const [isPending, setIsPending] = useState(false)
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("")
    const [author, setAuthor] = useState("")

    function message(){
        setIsPending(true);
       
    }
function addBlog(e){
    e.preventDefault()
    let blog = {title, detail, author}
    fetch("http://localhost:9000/Blogs", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(blog)
    })
    
    message()
}
     

    return(
        <div className="new_blog">
            <form onSubmit={addBlog}>
                {isPending && <p>Your Blog is added successfully</p>}
                <label>Blog Title</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <label>Blog Detail</label>
                <input 
                    type="text"
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    />
                <label>Blog Author</label>
                <input 
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    />
                <button className="btn_add">Add Blog</button>
            </form>
        </div>
    )
}
export default AddBlog;