import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



    

export default function Thermostat(props) {
  

  const marks = [
    {
      value: 60,
      label: '60°F',
    },
    {
        value: 50,
        label: '40°F',
      },
    {
      value: 80,
      label: '80°F',
    },
    {
      value: 100,
      label: '100°F',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }
  

  

  return (
    <>
      <h1> 
          Temperature range
      </h1>
       
     
      <Slider
        orientation="vertical"
        value={props.value}
        min={50}
        step={1}
        max={100}
        onChangeCommitted= {props.handleSubmit}
        getAriaValueText={valuetext}
        marks = {marks}
        onChange={props.handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="vertical-slider"

        style = {{height: 300}}
      />

    <Slider
          disabled
          orientation="vertical"
          max={100}
          step={1}
          min={40}
          defaultValue={80}
          aria-labelledby="vertical-slider"
          style = {{height: 300}}
        />
      <p>{props.value}</p>
    </>
  );
}
