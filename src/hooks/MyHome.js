import React, { useEffect, useState } from 'react'
import {Memoized as Light} from './Lights/Light'
import Thermostat from './Thermostat/Thermostat'
import Speech from './Command/SpeechRecognition'
import CommandList from './Command/CommandList'
import Logs from './Logs/Logs'
import HomeModel from '../api/index'
import Input from '../util/Input'
import LastLog from './Logs/LastLog'
import LightHeader from './Lights/LightHeader'
import { useSpeechRecognition } from 'react-speech-recognition'



export default function MyHome () {
    const [lights, setLights] = useState();
    const [value, setTempature] = useState(82)
    const [logs,setLogs] =useState()
    const {transcript } = useSpeechRecognition("")
    const [input,setInput]=useState("")
    const [lastLog,setLastLog] =useState(false)
 
    //Fetch Home
    useEffect(() => {   
        getMyHome()
    },[])

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

    //Ligth functions
    function addLight ()  { 
        HomeModel.addLight()
            .then(res => { 
                setLogs([...logs,"A new light added"])
                setLights([...lights,{isOn:false}])
            })
            .catch(err => console.log(err))
    }

    function removeLastLight () {
        HomeModel.deleteLastLigth()
            .then(res =>  {
                const temp = [...lights]
                temp.pop()
                setLights(temp)     
                setLogs([...logs,"Last light deleted"])
            })
            .catch(err => console.log(err))
    }

    function deleteLight (id) {   
        HomeModel.removeLight(id)
            .then(res => {
                const temp = [...lights];
                temp.splice(id,1);
                setLights(temp);
                let suffix = Input.ordinal_suffix_of(id+1)
                setLogs([...logs,`The ${suffix} light deleted`])
            })
            .catch(err => console.log(err))
    }

    function toggleLight (id) {
        HomeModel.toggleLight(id)
            .then(res => {
                const temp = [...lights]
                temp[id].isOn = !temp[id].isOn
                setLights(temp)
                let suffix = Input.ordinal_suffix_of(id+1)
                if (!temp[id].isOn) return setLogs([...logs,`The ${suffix} light turned off`])
                setLogs([...logs,`The ${suffix} light turned on`])
            })
            .catch(err => console.log(err) )
    }


    // Transcript
    useEffect(()=>{
        transcriptCheck(transcript)
        // eslint-disable-next-line
    },[transcript])

    function transcriptCheck(value)  {
        // If text command or voice command empty return
        if(value === "" || value ===undefined) return
        // Get words of commands and make digits for string values
        let [first,fifth,twowords,threewords,fourwords,index,indexForDelete] = Input.split_of(value)

        if(fourwords ==="add a new light" || threewords === "add a light" ) addLight()
        if(fourwords ==="delete the last light" || fourwords === "remove the last light") removeLastLight()
        if(threewords ==="set the temperature" && fifth >= 50 && fifth <= 100 )  {sendTempatureToServer("",fifth); handleChangeforTempature("",fifth)}

        // If there is no digit from the input return
        if (index === -1 && indexForDelete === -1) return 
        if(first ==="delete" || first === "remove" ) deleteLight(indexForDelete)
        if(twowords ==="turn on" && lights[index].isOn === false ) toggleLight(index)
        if(twowords ==="turn off" && lights[index].isOn === true ) toggleLight(index)
    }

    //  Text Command
    useEffect(()=>{
        transcriptCheck(input)
        // eslint-disable-next-line
    },[input])

    function onChange(event) {
        setInput(event.target.value)
    }

    // Thermostat
    function handleChangeforTempature (event, newValue)  {
        setTempature(newValue)
    };


    function sendTempatureToServer (event, value) { 
        HomeModel.setTempature({value})
            .then (res => {
                setLogs([...logs,`Set the thermostat to ${value}°F`])
            })
            .catch(err => console.log(err))
    };

    // display the last log
    // function showLastLog() {
    //     setLastLog(true)
    //     setInterval(() => {setLastLog(false)}, 4000);   
    // }

    let lightList;

    if (lights) {
        lightList = lights.map((element,idx) => {
            return <div key={idx} className="light"><Light toggleLight = {toggleLight} deleteLight ={deleteLight} id={idx}  checkOn={lights[idx] ? lights[idx].isOn : true} /></div>
        })
    }; 
        return (
            <div> 
                <div className = "row">
                     <div className="left">           
                        <LightHeader addLight={addLight} removeLastLight={removeLastLight}/>
                        <div className="light-container">
                            {lightList}
                        </div>
                    </div>      
                    <div className="right">           
                        <Thermostat key ="thermo"
                            handleSubmit = {sendTempatureToServer} 
                            handleChange = {handleChangeforTempature} 
                            value = {value}
                        /> 
                        <Speech 
                            transcript ={transcript} 
                            transcriptCheck = {transcriptCheck}
                            key ="speech" 
                            toggleLight = {toggleLight}
                        />
                        <p> Your Text Command : <input value={input} onChange={onChange}></input></p>
                        <CommandList/>
                        <Logs  logsAll ={logs} />  
                    </div>
                </div>
                <LastLog   logs= {logs} />  
            </div>                   
        )   
}
