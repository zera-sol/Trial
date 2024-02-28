import React from "react"

export default function Person(props){
    const attendanceStyle = {
        backgroundColor: props.attendance?"green":"red"
    }
   
    return(
        <div>
            <div className="person">
                <div>                 
                    <div className="profile">
                     {props.image? <img src={props.image} alt={props.name} />: "NO image"}
                     <div className="attendance" style={attendanceStyle}></div>
                    </div>
                    {props.name ? <h2>Name: {props.name}</h2>: <h2>Name: Unknown!</h2>}
                    {props.age ? <h4>Age: {props.age}</h4>: <h4>Age: Unknown!</h4>}
                    {props.department? <h6>Department: {props.department}</h6>: <h6>Department: Unknown!</h6>}
                </div>
            </div>
        </div>
    )

}