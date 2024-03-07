import React from "react";

function AddBlog(){
    return(
        <div className="new_blog">
            <form>
                <label>Blog Title</label>
                <input 
                    type="text"
                    />
                <label>Blog Detail</label>
                <input 
                    type="text"
                    />
                <label>Blog Author</label>
                <input 
                    type="text"
                    />
                <button className="btn_add">Add Blog</button>
            </form>
        </div>
    )
}
export default AddBlog;