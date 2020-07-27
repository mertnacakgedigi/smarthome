import React, { Component } from 'react'
import HomeModel from '../models/api'
import Slider from '@material-ui/core/Slider';

export default class Tempature extends Component {
    state = {
        value : this.props.value
    }

    static getDerivedStateFromProps(props, state) {
        return {value: props.tempature };
    }

    handleSubmit = (event, value) => {
        
        HomeModel.setTempature({value})

    }

    valuetext = (value)  => {  
   
        return `${value}°C`

    }

    handleChange = (event, value) => {
        let newValue = this.state.value
        newValue = value
      
        this.setState({ value : newValue })
   
    };


    render() {
        const tempature = this.props.tempature
        console.log(tempature)
        return (
            
            <div >
                <Slider
                defaultValue={tempature}
                getAriaValueText={this.valuetext}
                onChange = {this.handleChange}
                onChangeCommitted= {this.handleSubmit}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                min={50}
                max={90}
                style ={{width:"300px"}}
                />
                <p>{this.state.tempature}</p>        
            </div>
        )
    }
}
