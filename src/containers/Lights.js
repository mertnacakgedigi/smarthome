import React, { Component } from 'react'
import Light from '../components/Light'
import { AddCircleOutlineTwoTone as Add , RemoveCircleOutlineTwoTone as Remove } from '@material-ui/icons';

export default class Lights extends Component {
    state = {
        counter : 1
    }
    increment = () => {
        let counter = this.state.counter + 1;
        this.setState({
            counter
        })
        
    }
    decrement = () => {
        let counter = this.state.counter - 1;
        this.setState({
            counter
        })
    }


    render() {
       
        let lights = []
        for (let i =0; i< this.state.counter;i++) {
            lights.push(<Light/>)
        }
        return (
            <div>
                <h1>Lights</h1>
                <Add onClick={this.increment} />  
                <Remove  onClick={this.decrement}/>
                {lights}
            </div>
        )
    }
}
