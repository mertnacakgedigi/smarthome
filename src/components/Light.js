import React from 'react'
import Switch from '@material-ui/core/Switch';
import { EmojiObjectsTwoTone as Bulb , HighlightOff as Delete} from '@material-ui/icons';
import HomeModel from '../models/api'



export default function Light(props) {

    return (
        <div>
            <Switch 
            checked={props.checkOn} 
            onChange ={() => props.test(props.id)}
            color="primary"
            />
            <Bulb style={{ color: props.checkOn ?  "yellow" : "black ",fontSize :"60px"}} />
            <Delete onClick = {()=> props.deleteLight(props.id)} style={{ color: "red" }}/>
        </div>
    )
}
