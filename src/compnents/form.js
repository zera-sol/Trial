import { useState } from "react"
import { db } from "../config/firebase"
import { addDoc, collection } from "firebase/firestore"
export default function AddForm(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [date, setDate] = useState(null)
    const [isDone, setIsDone] = useState(false)

    function setTrue(){
        setIsDone(true)
    }
    function setFalse(){
        setIsDone(false)
    }
    const addDataToFirestore = async (collectionName, data) => {
        try {
          const docRef = await addDoc(collection(db, collectionName), data);
          console.log("Document written with ID: ", docRef.id);
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      };

      const dataToAdd = {
        "date": date,
        "description": description,
        "isDone": isDone,
        "link": link
      };
     
    function addToDataBase(){
        addDataToFirestore("projects", dataToAdd)
    }
    return(
        <div>
            <label>Title:</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <label>Description:</label>
            <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)}/>
            <br />
            <label>Date</label>
            <input type="number" required value={date} onChange={(e) => setDate(e.target.value)}/>
            <br />
            <label>link</label>
            <input type="text" required value={link} onChange={(e) => setLink(e.target.value)}/>
            <br />
            <label>Yes:</label>
            <input type="radio" name="isdone" onClick={setTrue}/>
            <label>No:</label>
            <input type="radio" name="isdone" onClick={setFalse}/>
            <button onClick={addToDataBase}>Submit</button>

        </div>
    )
}