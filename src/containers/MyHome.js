import React, { useEffect, useState } from 'react'
import {Memoized as Light} from '../components/Light'
import Thermostat from './Thermostat'
import Speech from './SpeechRecognition'
import Logs from '../components/Logs'
import { AddCircleOutlineTwoTone as Add , RemoveCircleOutlineTwoTone as Remove } from '@material-ui/icons';
import HomeModel from '../models/api'
import LogModel from '../models/log'

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


export default function MyHome () {

    const [lights, setLights] = useState();
    const [value, setTempature] = useState(74)
    const [logs,setLogs] =useState()
    const {transcript, resetTranscript } = useSpeechRecognition("")
 

    useEffect(() => {   
        async function getMyHome () {
            try {                  
                const res = await HomeModel.fetchHome(); 
                const {lights , value, logs} = res.data; 
                setLights(lights);
                setTempature(value);
                setLogs(logs)
            }
            catch(err){
                console.log(err)
            }
        }
        getMyHome()
    
    },[])


    useEffect(()=>{
     
        sendIndex()
    },[transcript])


    function addLight ()  {
        HomeModel.addLight()
        setLights([...lights,{isOn:true}])
        setLogs([...logs,"New light added"])
    }


    function removeLastLight () {

        const temp = [...lights]
        temp.pop()
        setLights(temp)
        HomeModel.deleteLastLigth()
        setLogs([...logs,"Last light deleted"])
    }

    function deleteLight (id) {
        
       const temp = [...lights];
       temp.splice(id,1);
       setLights(temp);
       HomeModel.removeLight(id)
       let suffix = LogModel.ordinal_suffix_of(id+1)
       setLogs([...logs,`${suffix} light deleted`])
    }


    function toggleLight (id) {
        

        const temp = [...lights]
        temp[id].isOn = !temp[id].isOn
        setLights(temp)
        HomeModel.toggleLight(id)
        let suffix = LogModel.ordinal_suffix_of(id+1)
        if (!temp[id].isOn) return setLogs([...logs,`${suffix} light turned off`])
        setLogs([...logs,`${suffix} light turned on`])
    }

    function sendIndex()  {
        const special = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
        let index = special.indexOf(transcript.split(" ")[3])
        if (index === -1) return    
        toggleLight(index)
    }

    function handleChange (event, newValue)  {

        setTempature(newValue)
    };


    function handleSubmit (event, value) {
   
        HomeModel.setTempature({value})
    };

    function turnOffLightUsingSpeech (id) {
        if(id ===-1) return
        const temp = [...lights]
        temp[id].isOn = false
        setLights(temp)

    }

    function turnOnLightUsingSpeech (id) {
        if(id ===-1) return
        const temp = [...lights]
        temp[id].isOn = true
        setLights(temp)
    }

    
    let lightList;

    if (lights) {
        lightList = lights.map((element,idx) => {
            return <div key={idx} className="light"><Light toggleLight = {toggleLight} deleteLight ={deleteLight} id={idx}  checkOn={lights[idx] ? lights[idx].isOn : true} /></div>
        })

    };
    console.log("MyHouse Rerender")


        return (
            <div className="container"> 
                <div className = "row">
                     <div className="left">           
                        <h1>Lights</h1>
                        <Add onClick={addLight} />  
                        <Remove  onClick={removeLastLight}/>
                        <div className="light-container">
                            {lightList}
                        </div>
                    </div>
                  
                    <div className="right">           
                      <Thermostat key ="thermo"
                        handleSubmit = {handleSubmit} 
                        handleChange = {handleChange} 
                        value = {value}/>                      
                    </div>
                </div>
               
                <div className = "row">
                        <Speech transcript ={transcript} sendIndex = {sendIndex}  key ="speech" toggleLight = {toggleLight} turnOn = {turnOnLightUsingSpeech}  turnOff = {turnOffLightUsingSpeech} />
                        <Logs logsAll ={logs} />
                </div>
            </div>
           
      
            
        )
    
}
