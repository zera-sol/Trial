import {useState, useEffect} from "react"

function useFetch(url){
    const[data, setData] = useState([]);
    const[ispending, setIsPending] = useState(true)
    const[error, setError] = useState(null)
    useEffect(() => {
        setTimeout(()=> {
            fetch(url).then(res => {
                    if(!res.ok){
                        throw Error("We couldn't able to getchthe data due to some system Errors")
                    }
                    return res.json()
                }).then((data) => {
                        setIsPending(false)
                        setError(null)
                        setData(data);
                }).catch(err => {
                    setIsPending(false)
                    setError(err.message)
                })
        }, 2000)
    }, [url])

    return {data, ispending, error}
}

export default useFetch;
