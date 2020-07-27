import React from 'react'
import Switch from '@material-ui/core/Switch';
import { EmojiObjectsTwoTone as Bulb , HighlightOff as Delete} from '@material-ui/icons';




function Light({toggleLight, deleteLight , id , checkOn}) {
    console.log("Light")
    return (
        <div style ={{backgroundColor : checkOn ?  " white " :"grey" }}>
            <Delete onClick = {()=> deleteLight(id)} style={{ color: "red", marginTop:"5px" }}/>
            <Bulb style={{ color: checkOn ?  "orange" : "black ",fontSize :"70px"}} />
            <Switch 
            checked={checkOn} 
            onChange ={() => toggleLight(id)}
            color="primary"
            />
            
           
        </div>
    )
}


export const Memoized = React.memo(Light)