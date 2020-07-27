import React, { Component , PureComponent } from 'react'
import {Memoized} from '../components/Light'
import Thermostat from './Thermostat'
import Speech from './SpeechRecognition'
import { AddCircleOutlineTwoTone as Add , RemoveCircleOutlineTwoTone as Remove } from '@material-ui/icons';
import HomeModel from '../models/api'

export default class MyHome extends Component {
   state = {
       lights : [],
       value : 0
   }
    
   componentDidMount () {
    this.getMyHome()
   }



   getMyHome = async () => {
    let res = await HomeModel.fetchHome();
    let { lights , value} = res.data;
   
    this.setState({ lights , value : value });
   };

    
    increment = () => {
        HomeModel.addLight()
            .then(res => {
                let addedLights = this.state.lights
                addedLights.push({"isOn":true})
                this.setState({
                    lights: addedLights
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
        
       let outputArray = this.state.lights
       outputArray.splice(id,1)
        HomeModel.removeLight(id)
            .then(res => this.setState({
                lights : outputArray
            }))

    }

    toggleLight = (id) => {
       
        let toggledLightList = this.state.lights
        toggledLightList[id].isOn = !toggledLightList[id].isOn
        HomeModel.toggleLight(id)
        .then(res => this.setState({
            lights : toggledLightList
        }))
    }

    valuetext = (value)  => {  
       
        return `${value}°F`
    
      }

    handleChange = (event, newValue) => {

        this.setState({ value : newValue })
   
    };


    handleSubmit = (event, value) => {
   
        HomeModel.setTempature({value})

    };


    render() {

 
       
        
        const lightList = this.state.lights.map((element,idx) => {
            return <Memoized toggleLight = {this.toggleLight} deleteLight ={this.deleteLight} id={idx} key={idx} checkOn={this.state.lights[idx] ? this.state.lights[idx].isOn : true} />
        })
    
        return (
            <div>
                <h1>Lights</h1>
                <Add onClick={this.increment} />  
                <Remove  onClick={this.decrement}/>
                {lightList}
                <Thermostat valuetext = {this.valuetext} handleSubmit = {this.handleSubmit} handleChange = {this.handleChange} value = {this.state.value}/>
                <Speech />
            </div>
        )
    }
}
