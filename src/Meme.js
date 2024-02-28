import React from "react"
import images from "./images"
import { useState } from "react";

let zera = ["Thing 1"];
export default function Meme(){
    let myStyle ={
        color: "white"
    }
    let [num, setNum] = useState(0);
    let [item, setItem] = useState(2);
    let list;
    
    function generateRandomNumber(){
         zera.push(`Thing ${item}`)
            const x = Math.floor(Math.random()*(images.length))
            setNum(x)
            let y = item + 1;
            setItem(y)
           
       }    
          list = zera.map((a) => <p style={myStyle}>{a}</p>)
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