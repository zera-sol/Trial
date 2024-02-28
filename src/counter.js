import React from "react"
import { useState } from "react"

export default function Counter(){
    let [x , setx] = useState(0)
    function adder(){

        let newNum = x+1;
        setx(newNum)
    }
    function subtractor(){
        let newNum = x<=0? 0 : x - 1;
        setx(newNum)
    }
    return(
        <div className="counter">
                <div className="sub" onClick={subtractor}><h1>-</h1></div>
                <div className="value"><h1>{x}</h1></div>
                <div className="add" onClick={adder}><h1>+</h1></div>
        </div>
    )
}