import React, {useState, useEffect} from "react"

function Zera(){
    const [users, setUsers] = useState([])

    useEffect(() => {
            fetch("http://localhost:9000/blogs")
                .then((res) => res.json())
                .then((data => {
                    console.log(data)
                }))
    })
}