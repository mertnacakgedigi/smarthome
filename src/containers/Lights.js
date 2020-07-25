import React, { Component } from 'react'
import Light from '../components/Light'
import { AddCircleOutlineTwoTone as Add , RemoveCircleOutlineTwoTone as Remove } from '@material-ui/icons';
import HomeModel from '../models/api'
export default class Lights extends Component {
    state = {
        counter : null
    }


    componentDidMount() {
        HomeModel.fetchHome()
            .then(res => {
                this.setState({counter : res.data.lights.length})
            })
    }


    increment = () => {
        // let counter = this.state.counter + 1;
        // this.setState({
        //     counter
        // })
        HomeModel.addLight()
            .then(res => {
                console.log(res)
                this.setState({
                    counter : res.data.lights.length
                })
            })

        
        
    }
    decrement = () => {
        let counter = this.state.counter - 1;
        this.setState({
            counter
        })
    }

    deleteLight = (data) => {
        HomeModel.removeLight(data)
            .then(res => console.log(res))
    }


    render() {
       
        let lights = []
        for (let i =0; i< this.state.counter;i++) {
            lights.push(<Light deleteLight ={this.deleteLight} id={i}/>)
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
