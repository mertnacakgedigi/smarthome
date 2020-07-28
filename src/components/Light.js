import React from 'react'
import Switch from '@material-ui/core/Switch';
import { EmojiObjectsTwoTone as Bulb , HighlightOff as Delete} from '@material-ui/icons';
import loop from "../style/loop.gif"
import dark from "../style/canoodark.jpg"



function Light({toggleLight, deleteLight , id , checkOn}) {
    console.log("Light")
    return (
        <div style ={{backgroundColor : checkOn ?  " black " :"black" }}>
            
            { checkOn ?
                 <img className="canoo"  src={loop} alt="loop"/> 
                 :
                 <img className="canoo" src={dark} alt="loop"/>


            }
            <span className="delete">-</span>
            {/* <Delete className="delete" onClick = {()=> deleteLight(id)} style={{ color: "white", marginTop:"5px" }}/> */}
            <Switch 
            checked={checkOn} 
            onChange ={() => toggleLight(id)}
            color="primary"
            />
            
           
        </div>
    )
}


export const Memoized = React.memo(Light)