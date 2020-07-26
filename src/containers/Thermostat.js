import React, { Component } from 'react'
import HomeModel from '../models/api'
import { CircleSlider } from "react-circle-slider-temperature";

export default class Tempature extends Component {
    state = {
        tempature : 0
    }

    componentDidMount(){    
        HomeModel.fetchHome()
            .then(res => this.setState({tempature:res.data.tempature}))
    }
    handleChange = (tempature ) => {
        
        this.setState({  tempature });
       
        
    }

    handleSubmit = (value) => {
        HomeModel.setTempature(this.state)
    }



    render() {
        return (
            <div >
                 <CircleSlider min={50} max ={90} value={this.state.tempature} onChange={this.handleChange} onAnimationEnd={this.handleSubmit} />
                 <p>{this.state.tempature}</p>
                
            </div>
        )
    }
}
