import React from 'react'
import Switch from '@material-ui/core/Switch';
import { EmojiObjectsTwoTone as Bulb , HighlightOff as Delete} from '@material-ui/icons';
import loop from "../style/loop.gif"
import dark from "../style/canoodark.jpg"
import DeleteIcon from '@material-ui/icons/Delete';



function Light({toggleLight, deleteLight , id , checkOn}) {
  
    return (
        <div className="box">
            
            { checkOn ?
                 <img className="canoo"  src={loop} alt="loop"/> 
                 :
                 <img className="canoo" src={dark} alt="loop"/>
            }
            <span className="delete" onClick = {()=> deleteLight(id)}>&#10006;</span>
            <Switch 
            checked={checkOn} 
            onChange ={() => toggleLight(id)}
            color="primary"
            />   
        </div>
    )
}


export const Memoized = React.memo(Light)