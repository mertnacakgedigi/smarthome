import React from 'react'
import Switch from '@material-ui/core/Switch';
import { EmojiObjectsTwoTone as Bulb , HighlightOff as Delete} from '@material-ui/icons';




function Light({toggleLight, deleteLight , id , checkOn}) {
    console.log("Light")
    return (
        <div style ={{backgroundColor : checkOn ?  " white " :"black" }}>
            <Switch 
            checked={checkOn} 
            onChange ={() => toggleLight(id)}
            color="primary"
            />
            <Bulb style={{ color: checkOn ?  "yellow" : "white ",fontSize :"70px"}} />
            <Delete onClick = {()=> deleteLight(id)} style={{ color: "red" }}/>
        </div>
    )
}


export const Memoized = React.memo(Light)