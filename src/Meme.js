import React from "react"
import images from "./images"
import { useState } from "react";

export default function Meme(){
    let myStyle ={
        color: "white"
    }
    let [num, setNum] = useState(0);
    let [item, setItem] = useState([]);
    let list;
    
    function generateRandomNumber(){
            const x = Math.floor(Math.random()*(images.length))
            setNum(x)
            let newArray = [...item, `Thing ${item.length +1}`];
            setItem(newArray);
           }    
          list = item.map((a) => <p style={myStyle}>{a}</p>)
    return(
        <div className="dynamic">
            <div className="dynamic-image">
                <img src={images[num].url} alt="" />
            </div>
            <div className="dynamic-button">
                <button onClick={generateRandomNumber} >change Image</button>
            </div>
             {list}
        </div>
    )
}