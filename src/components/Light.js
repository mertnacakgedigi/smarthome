import React, {Component} from 'react'
import Switch from '@material-ui/core/Switch';
import { EmojiObjectsTwoTone as Bulb , HighlightOff as Delete} from '@material-ui/icons';
import HomeModel from '../models/api'

export default class Light extends Component{

        state = {
            checkOn : this.props.checkOn,
            id : this.props.id

        }

        // toggleLight = (id) => {
        //     id = this.state.id
            // HomeModel.toggleLight(id)
            //     .then(res => this.setState({
            //         checkOn : !this.state.checkOn
            //     }))
        // }
    
    
        
        render (){
            
            return (
                <div>
                    <Switch 
                    checked={this.props.checkOn} 
                    onChange ={() => this.props.test(this.props.id)}/>
                   {/* <Switch
                   checked={this.state.checkOn}
                   onChange ={this.toggleLight}
                   /> */}
                   <Bulb style={{ color: "yellow" }}/>
                   <Delete onClick = {()=> this.props.deleteLight(this.props.id)} style={{ color: "red" }}/>
                   <p>{this.props.id}</p>
                </div>
            )
        }

    
}
