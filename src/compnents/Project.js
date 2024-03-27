import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import {getDocs, collection} from "firebase/firestore"


export default function Projects(){
 const [projectList, setProjectList] = useState([]);

 const collectionRef = collection(db, "projects")

 useEffect(() => {
   const getProjectList = async () =>{
     // read the project list from the database
     //then set the list to the variable = projectList
    try{
        const data = await getDocs(collectionRef)
        const filteredData = data.docs.map((a) => ({
            ...a.data(),
            id: a.id
        }))
        setProjectList(filteredData)
    }catch(err){
        console.error(err)
    }
     
   }

   getProjectList()
 }, [])

    return(
        <div>
            { 
                projectList.map((project) => (
                    <div>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Visit page</a>
                    </div>
                ))
            }
        </div>
      
    )
}