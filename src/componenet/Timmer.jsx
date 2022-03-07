import { useEffect, useState } from "react";


function Timmer({curretQte}) {
    const [timmer, setTimmer] = useState(30);

    useEffect(()=>{
     
        let interval = null;
        if(timmer >= 1){
            interval = setInterval(()=>{
                setTimmer(prev=>prev-1)
            },1000)
        }
        else{
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);

    },[timmer])

    useEffect(()=>{
        setTimmer(5);
    },[curretQte])
         
    return timmer;
}

export default Timmer;