import React, {useEffect} from 'react'

export default function LastLog(props) {

    useEffect(()=>{
        props.showLastLog()
    },[props.logs])

    return (
        <p className="lastLog" style ={{display : props.lastLog ? "block ": "none"}}>{props.logs ? props.logs[props.logs.length-1] : "" }</p>                   
    )
}
