import { useState, useEffect } from "react";

export function useFetch(url){
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if(!url) return 
            async function fetchData(){
                const reponse = await fetch(url)
                const data = await reponse.json()
                setData(data)
                setLoading(false)
            }
        
            setLoading(true)    
            fetchData()
            }, [url])
        
        return { isLoading, data }
    
}