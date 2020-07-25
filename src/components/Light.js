import React from 'react'
import Switch from '@material-ui/core/Switch';
import { EmojiObjectsTwoTone as Bulb , HighlightOff as Delete} from '@material-ui/icons';

export default function Light (props) {
        console.log(props)
        return (
            <div>
               <Switch
               checked={true}
               />
               <Bulb style={{ color: "yellow" }}/>
               <Delete onClick = {()=> props.deleteLight(props.id)} style={{ color: "red" }}/>
            </div>
        )
    
}
