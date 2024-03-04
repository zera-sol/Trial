import useFetch from "./useFecth";

function Zera(){
    const myStyle = {
        color : 'green'
    }
    const {data, ispending, error} = useFetch("http://localhost:9000/blogs") 
     
    return(
        <div>
            {error && <div style={myStyle}>{error}</div>}
            {ispending && <div style={myStyle}>Loadding...</div>}
            <div>
            <h1>Users List and Description</h1>
            <ul>
                {data.map((a) => (
                    <div className="zera-box">
                        <li key={a.id} >Name: {a.name},<span>  Department: {a.department} </span></li>
                    </div>
                
                ))}
            </ul>
            </div>
           
        </div>
    )
}
                    export default Zera;