import {useEffect, useState} from "react"

function useFetch(url){
    const [data, setData] = useState([]);
  useEffect(()=>{
     fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error("Unable to Fetch Data")
            }
            return res.json()
        }).then((blog) => {
            setData(blog)
        }).catch((err) => {
            console.log(err)
        })
  }, [url])
  return data;
}
export default useFetch;