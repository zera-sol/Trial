import React from "react"
import images from "./images"

export default function Meme(){
    let num = 0;
    function generateRandomNumber(){
       num = Math.floor(Math.random()*(images.length +1))
       console.log(num);
    }   
    return(
        <div className="dynamic">
            <div className="dynamic-image">
                <img src={images[num].url} alt=""  />
            </div>
            <div className="dynamic-button">
                <button onClick={generateRandomNumber} >change Image</button>
            </div>

        </div>
    )
}