import React from "react";
import data from "./data";
import Person from "./props";
import { useState } from "react";

export default function PropsGenerator(){
    let [profileData, setProfileData] = useState(data);

    function deleteAPerson(id){
          let newArray = profileData.filter((a) => a.id !== id);
          setProfileData(newArray)
          console.log(newArray, id)
          profileData[id].attendance = null;
    }
     
    const student = profileData.map((a)=>{
        return (<Person  
            attendance = {a.attendance}
            key = {a.id}
            image = {a.image}
            name = {a.name}
            age = {a.age}
            department = {a.department}
            clickDelete = {()=>{deleteAPerson(a.id)}}
         />)
    })

    return(
        <div>
            {student}
        </div>
    )
}