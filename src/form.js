import React from 'react';
import { useState } from 'react';

export default function Form(){
    let [blogTitle, setBlogTitle] = useState("")
    let [blogDescription, setBlogDescription] = useState("")
    let [blogAuthor, setBlogAuthor] = useState("")

    function greeting(blogAuthor){
        console.log(`Hello ${blogAuthor}`)
    }
   
    return(
        <div className='form_div'>
            <form>
                <label>Blog Title</label>
                <input 
                    type='text'
                    required 
                    value={blogTitle}
                    onChange={(e)=> setBlogTitle(e.target.value)}/>
                <label>Blog Description</label>
                <textarea 
                    placeholder='Description about the blog'
                    required 
                    value={blogDescription}
                    onChange={(e) => setBlogDescription(e.target.value)}/>
                <label>Blog Autor</label>
                <input 
                    type='text' 
                    required
                    value={blogAuthor}
                    onChange={(e) => setBlogAuthor(e.target.value)} />
                <button onClick={()=> greeting(blogAuthor)}>Submit</button>
            </form>
            <div className='blog_input'>
                <h1 className='blog_title'>{blogTitle}</h1>
                <p className='blog_discription'>{blogDescription}</p>
                <p className='blog_author'>{blogAuthor}</p>
            </div>            
        </div>
    )
}