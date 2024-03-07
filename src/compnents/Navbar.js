import React from "react";

function Navbar(){
    return(
        <nav>
            <div className="nav_bar">
                <h3>Zera<span className="blog_span">Blog</span></h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/blog">Add blog</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;