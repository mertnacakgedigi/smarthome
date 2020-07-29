import React, { useEffect , useState , useRef} from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircleOutlineTwoTone as Add , RemoveCircleOutlineTwoTone as Remove } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
      color : 'white'
    },
    disabled : {
      color : 'purple'
    }
});
    

export default function Thermostat(props) {
  const [counterRed,setRed] = useState(0)
  const [counterBlue,setBlue] = useState(250)
  const [currentRgb,setRgb] = useState(updateThermostatColor())
  const {root,disabled} = useStyles();


  function updateThermostatColor () {
    let stack = 50    
    let rgb = (props.value - stack)*5
    let currentColor = `rgb(${rgb},0,${250-rgb})`
    return currentColor
}

  const marks = [
    {
      value: 60,
      label: '60°F',
    },
    {
        value: 50,
        label: '50°F',
      },
      {
        value: 70,
        label: '70°F',
      },
    {
      value: 80,
      label: '80°F',
    },
    {
      value: 90,
      label: '90°F',
    },
    {
      value: 100,
      label: '100°F',
    },
  ];
  const defaultMark = [{value: 77,label: '77°F',}]


  function valuetext(value) {
 
    return `${value}`;
  }


  return (
    <div>
      <h1>Temperature</h1>
      <Add/>
      <Remove/>

      <div  className="thermostat" style={{backgroundColor: `${updateThermostatColor()}` }}> 
      
      <Slider
        className={root}
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
        style = {{height: 320}}
      />
    
    <Slider
         className={disabled}
          disabled
          orientation="vertical"
          max={100}
          marks ={defaultMark}
          step={1}
          min={50}
          defaultValue={77}
          aria-labelledby="vertical-slider"
          style = {{height: 321}}
        />
        </div>
        <p className="tempature" >Thermostat:<span style={{color: `${updateThermostatColor()}` }}>{props.value}°F</span> Current Value:77°F</p>    
    </div>
  );
}
