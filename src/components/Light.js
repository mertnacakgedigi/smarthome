import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

export default class Light extends Component {
    render() {
        return (
            <div>
               <Switch/>
               <EmojiObjectsIcon style={{ color: "yellow" }}/>
            </div>
        )
    }
}
