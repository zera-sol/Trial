import React from "react"

export default function Person(props){
    let num = ["zera", "sol", "siyum"];
    let zera = num.map((a)=> {
        return `<p>${a}</p>`
    })
        console.log(zera)

    return(
        <div>
            <div className="person">
                <div>
                    {props.name ? <h2>Name: {props.name}</h2>: <h2>Name: Unknown!</h2>}
                    {props.age ? <h4>Age: {props.age}</h4>: <h4>Age: Unknown!</h4>}
                    {props.department? <h6>Department: {props.department}</h6>: <h6>Department: Unknown!</h6>}
                </div>
            </div>
        </div>
    )

}