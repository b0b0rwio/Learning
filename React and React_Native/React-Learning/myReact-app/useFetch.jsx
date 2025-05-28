import { useState,useEffect } from 'react';
const useFetch=(url)=>{
    
    const [PlList,setPlList]=useState(null);
    const [error,setError]=useState(null);
    
    useEffect(()=>{
            setTimeout(() => {
            fetch(url)
            .then((response)=>{
                if(!response.ok){
                    throw new Error(`Error Code: ${response.status}, Page ${response.statusText}`);
                }
              return response.json()}
            )
            .then((data)=>{
                console.log(data)
                setPlList(data)})
            .catch((e)=>{
                console.log(e.message);
                setError(e.message);
            })
            }, 1000);
        },[]);

    return [PlList,setPlList,error]
}
export default useFetch;