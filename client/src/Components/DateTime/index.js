import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <h1> Time : {date.toLocaleTimeString()}</h1>
            <h1> Date : {date.toLocaleDateString()}</h1>
        </div>
    )
}

export default DateTime