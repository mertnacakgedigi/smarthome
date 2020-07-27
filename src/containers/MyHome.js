import React, { Component , PureComponent, useEffect, useState } from 'react'
import {Memoized as Light} from '../components/Light'
import Thermostat from './Thermostat'
import Speech from './SpeechRecognition'
import { AddCircleOutlineTwoTone as Add , RemoveCircleOutlineTwoTone as Remove } from '@material-ui/icons';
import HomeModel from '../models/api'
// or less ideally
import { Container , Col , Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
// }));

export default function MyHome () {

    const [lights, setLights] = useState();
    const [value, setTempature] = useState(74)

    useEffect(() => {
        const getMyHome = async () => {
            const res = await HomeModel.fetchHome();
            const {lights , value} = res.data;
         
            setLights(lights);
            setTempature(value);
        }
        getMyHome()
    },[])


    function addLight ()  {
        HomeModel.addLight()
            .then(res => {
                setLights([...lights,{"isOn":true}])
            })        
    }


    function removeLastLight () {

        const temp = [...lights]
        temp.pop()
        setLights(temp)
        HomeModel.deleteLastLigth()
    }

    function deleteLight (id) {
        
       const temp = [...lights];
       temp.splice(id,1);
       setLights(temp);
       HomeModel.removeLight(id)
    }

    function toggleLight (id) {

        const temp = [...lights]
        temp[id].isOn = !temp[id].isOn
        setLights(temp)
        HomeModel.toggleLight(id)
    }

    function valuetext (value) {  
       
        return `${value}°F`
    }

    function handleChange (event, newValue)  {

        setTempature(newValue)
    };


    function handleSubmit (event, value) {
   
        HomeModel.setTempature({value})
    };

    
    let lightList;
    if (lights) {
       
        lightList = lights.map((element,idx) => {
            return <div className="light"><Light toggleLight = {toggleLight} deleteLight ={deleteLight} id={idx} key={idx} checkOn={lights[idx] ? lights[idx].isOn : true} /></div>
        })
    };



        return (
            <div className="container"> 
                <div className = "row">
                     <div className="col">           
                        <h1>Lights</h1>
                        <Add onClick={addLight} />  
                        <Remove  onClick={removeLastLight}/>
                        <div className="light-container">
                            {lightList}
                        </div>
                    </div>
                  
                    <div className="col">           
                      <Thermostat 
                        valuetext = {valuetext}
                        handleSubmit = {handleSubmit} 
                        handleChange = {handleChange} 
                        value = {value}/>                      
                    </div>






                </div>
               
                <div>
                        <Speech />
                </div>
            </div>
        )
    
}
