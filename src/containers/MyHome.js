import React, { useEffect, useState } from 'react'
import {Memoized as Light} from '../components/Light'
import Thermostat from './Thermostat'
import Speech from './SpeechRecognition'
import { AddCircleOutlineTwoTone as Add , RemoveCircleOutlineTwoTone as Remove } from '@material-ui/icons';
import HomeModel from '../models/api'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


export default function MyHome () {

    const [lights, setLights] = useState();
    const [value, setTempature] = useState(74)
    const {transcript, resetTranscript } = useSpeechRecognition("")

    useEffect(() => {
         console.log("MyHouse UseEffect Before")
        const getMyHome = async () => {
            const res = await HomeModel.fetchHome();
            const {lights , value} = res.data;
         
            setLights(lights);
            setTempature(value);
        }
        getMyHome()
        console.log("MyHouse UseEffect After")
    },[])


    useEffect(()=>{
        console.log("useeffect")
        sendIndex()
    },[transcript])


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
        // temp[id].isOn = !temp[id].isOn
        temp[id].isOn = false
        setLights(temp)
        HomeModel.toggleLight(id)
    }

    function sendIndex()  {
        const special = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
        let index = special.indexOf(transcript.split(" ")[3])
        console.log(transcript)

        if (index === -1) return

        console.log(transcript)
        console.log(index)
        toggleLight(index)
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
                     <div className="col">           
                        <h1>Lights</h1>
                        <Add onClick={addLight} />  
                        <Remove  onClick={removeLastLight}/>
                        <div className="light-container">
                            {lightList}
                        </div>
                    </div>
                  
                    <div className="col">           
                      <Thermostat key ="thermo"
                        valuetext = {valuetext}
                        handleSubmit = {handleSubmit} 
                        handleChange = {handleChange} 
                        value = {value}/>                      
                    </div>






                </div>
               
                <div>
                        <Speech transcript ={transcript} sendIndex = {sendIndex}  key ="speech" toggleLight = {toggleLight} turnOn = {turnOnLightUsingSpeech}  turnOff = {turnOffLightUsingSpeech} />
                </div>
            </div>
        )
    
}
