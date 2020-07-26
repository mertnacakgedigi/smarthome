import React, { Component } from 'react'
import Light from '../components/Light'
import { AddCircleOutlineTwoTone as Add , RemoveCircleOutlineTwoTone as Remove } from '@material-ui/icons';
import HomeModel from '../models/api'

export default class Lights extends Component {
    state = {
        lights : [],
        test : false
    }


    componentDidMount() {
        HomeModel.fetchHome()
            .then(res => {
                this.setState({
                    lights : res.data.lights
                })
            })       
    }

    increment = () => {
        HomeModel.addLight()
            .then(res => {
                this.setState({
                    lights: [...this.state.lights,{"isOn":true}]
                })
            })        
    }

    decrement = () => {
        HomeModel.deleteLastLigth()
            .then(res => {
                let newList = this.state.lights
                newList.pop()
                this.setState({lights:newList})
            })
    }

    deleteLight = (id) => {
        
       let outputArray = [...this.state.lights]
       outputArray.splice(id,1)

      
        HomeModel.removeLight(id)
            .then(res => this.setState({
                lights : outputArray
            }))

    }

    toggleTest = (id) => {
       
        let toggledLightList = this.state.lights

        console.log(toggledLightList[id].isOn)
        toggledLightList[id].isOn = !toggledLightList[id].isOn
        HomeModel.toggleLight(id)
        .then(res => this.setState({
            lights : this.state.lights
        }))
    }



    render() {
        
       
        const lightList = this.state.lights.map((element,idx) => {
            return <Light testB= {this.state.test} test = {this.toggleTest} deleteLight ={this.deleteLight} id={idx} key={idx} checkOn={this.state.lights[idx] ? this.state.lights[idx].isOn : true} />
        })
        console.log(this.state.lights)
  

        return (
            <div>
                <h1>Lights</h1>
                <Add onClick={this.increment} />  
                <Remove  onClick={this.decrement}/>
                {lightList}

            </div>
        )
    }
}
