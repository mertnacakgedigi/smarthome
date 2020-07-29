import React, { useEffect , useState , useRef} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



    

export default function Thermostat(props) {
  const [counterRed,setRed] = useState(0)
  const [counterBlue,setBlue] = useState(250)
  const [currentRgb,setRgb] = useState(defaultRgb())
  
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = props.value;
  });
  const prevCount = prevCountRef.current;
  // console.log(prevCount,props.value)
  // var currentRgb;
  // console.log(props.value)

  function defaultRgb () {
    let stack = 50
    
    let rgb = (props.value - stack)*5
    let defaultRgb = `rgb(${rgb},0,${250-rgb})`
    return defaultRgb
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

  // function thermoColor (){
  //   if (props.value >=50 && props.value <60) return `rgb(3, 2, 252)`
  //   if (props.value >=60 && props.value <70) return `rgb(42, 0, 213)`
  //   if (props.value >=70 && props.value <80) return `rgb(99, 0, 158`
  //   if (props.value >=80 && props.value <90) return `rgb(216, 0, 39)`
  //   if (props.value >=90 && props.value <=100) return `rgb(254, 0, 2)`
  // }

  // let color = thermoColor()

  function valuetext(value) {
 
    return `${value}`;
  }
  return (
    <div >
      <h1>Temperature</h1>
       
      <div  className="thermostat" style={{backgroundColor: `${defaultRgb()}` }}>
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
        style = {{height: 280}}
      />
  
    <Slider
         
          disabled
          orientation="vertical"
          max={100}
          marks ={defaultMark}
          step={1}
          min={50}
          defaultValue={77}
          aria-labelledby="vertical-slider"
          style = {{height: 280}}
        />
      </div>
        <p className="tempature">{`Thermostat :${props.value}°F Current Value :77°F`}</p>
      
    </div>
  );
}
