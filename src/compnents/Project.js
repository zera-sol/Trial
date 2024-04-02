import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import {getDocs, collection, doc} from "firebase/firestore"


export default function Projects(){
 const [projectList, setProjectList] = useState([]);

 const fetchData = async () => {
    try{
        const querySnapshot = await getDocs(collection(db, "projects"));
        const documents= querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        setProjectList(documents)
    }catch(err){
        console.error("There is something wrong while fetching from the database")
    }
 }
        useEffect(() => {
            fetchData()
        }, [])

console.log(projectList)
    return(
        <div>
           {
            projectList.map(a =>(
             <> 
                <h1 >{a.title}</h1>
                <p style={{color: a.isDone ? "green" : "red"}}>{a.description}</p>
                <button>{a.link}</button>
            </>
            ))
           }
        </div>
      
    )
}