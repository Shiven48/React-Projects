import { useEffect } from "react";
import { useState } from "react";

const UseFetch = ({url,options = []}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect( () => {
        fetchData();
    },[])

    const fetchData = async () => {
        try{
            setLoading(true)
            const response = await fetch(url,{...options});
            if(!response.ok) throw new Error(response.statusText)
            const resp = await response.json()
            if(resp){
                setData(resp)
                setLoading(false)
            }
        } catch(e){
            setError(e)
            setLoading(false)
        } 
    }

    console.log(data)

    if(loading){
        <div>Loading data! Please Wait.</div>
    }
    
    return [data,error,loading]
}

export default UseFetch;