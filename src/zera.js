import React, {useState, useEffect} from "react"

function Zera(){
    const [users, setUsers] = useState([])
    const [isPresent, setIsPresent] = useState(null)

    const myStyle = {
        color : isPresent?"green":"red"
    }
    useEffect(() => {
            fetch("http://localhost:9000/blogs")
                .then((res) => res.json())
                .then((data => {
                    setUsers(data)
                }))
    })
   
     
    return(
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((a) => (
                    <div className="zera-box"> 
                        <img src={a.image} alt="" />
                        <li key={a.id} style={myStyle}>Name: {a.name},<span>  Department: {a.department} </span></li>
                    </div>
                
                ))}
            </ul>
        </div>
    )
}

export default Zera;