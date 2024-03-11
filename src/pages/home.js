import React from "react";    
function Home(a){      
    return(
        <div className="all_blog">     
                
                        <div className="blog" onClick={a.handleClick}>                           
                           <h2>{a.title} </h2>
                           <h4>Written by {a.author}</h4>
                           <p>{a.detail}</p>
                       </div>
                                                              
        </div>
    )
}

export default Home;