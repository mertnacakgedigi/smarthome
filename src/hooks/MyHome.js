import React, { useEffect, useState } from 'react'
import {Memoized as Light} from '../components/Light'
import Thermostat from './Thermostat'
import Speech from './SpeechRecognition'
import Logs from '../components/Logs'
import HomeModel from '../api/index'
import LogModel from '../api/log'
import LastLog from '../components/LastLog'
import LightHeader from '../components/LightHeader'
import CommandList from '../components/CommandList'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


export default function MyHome () {

    const [lights, setLights] = useState();
    const [value, setTempature] = useState(82)
    const [logs,setLogs] =useState()
    const {transcript, resetTranscript } = useSpeechRecognition("")
    const [input,setInput]=useState("")
    const [lastLog,setLastLog] =useState(false)
 

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

    // Transcript
    useEffect(()=>{
     
        transcriptCheck(transcript)
    },[transcript])

    useEffect(()=>{
     
        transcriptCheck(input)
    },[input])

    function transcriptCheck(input)  {
        if(input === "") return
        console.log(input)
        const special = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
        let index = special.indexOf(input.split(" ")[3])
        let indexForDelete = special.indexOf(input.split(" ")[2])
        let [first,second,third,fourth,fifth] = input.split(" ")
        let twowords = `${first} ${second}`
        let threewords = `${first} ${second} ${third}`
        let fourwords = `${first} ${second} ${third} ${fourth}`
        // console.log(lights[index].is,  checkWords ==="turn on")
        if(fourwords ==="add a new light" || threewords === "add a light" ) addLight()
        if(fourwords ==="delete the last light" || fourwords === "delete the last Light") removeLastLight()
        console.log(fourth)
        if(threewords ==="set the temperature" && fifth >= 50 && fifth <= 100 )  {sendTempatureToServer("",fifth); handleChangeforTempature("",fifth)}
        
        if (index === -1 && indexForDelete === -1) return 

        if(first ==="delete") deleteLight(indexForDelete)
        if(twowords ==="turn on" && lights[index].isOn === false ) toggleLight(index)
        if(twowords ==="turn off" && lights[index].isOn === true ) toggleLight(index)

        // console.log(checkWords)
       
   
    }


    function toggleLight (id) {
        console.log("toggle")
        const temp = [...lights]
        temp[id].isOn = !temp[id].isOn
        setLights(temp)
        HomeModel.toggleLight(id)
        let suffix = LogModel.ordinal_suffix_of(id+1)
        if (!temp[id].isOn) return setLogs([...logs,`${suffix} light turned off`])
        setLogs([...logs,`${suffix} light turned on`])
    }




    function addLight ()  {
        
        HomeModel.addLight()
            .then(res => { 
                setLogs([...logs,"New light added"])
                setLights([...lights,{isOn:false}])
            })
            .catch(err => console.log(err))
    }


    function removeLastLight () {
        const temp = [...lights]
        temp.pop()
        setLights(temp)
        HomeModel.deleteLastLigth()
            .then(res =>  setLogs([...logs,"Last light deleted"]))
            .catch(err => console.log(err))
    }

    function deleteLight (id) {       
       const temp = [...lights];
       temp.splice(id,1);
       setLights(temp);
       HomeModel.removeLight(id)
       let suffix = LogModel.ordinal_suffix_of(id+1)
       setLogs([...logs,`${suffix} light deleted`])
    }







    // Thermostat
    function handleChangeforTempature (event, newValue)  {
        setTempature(newValue)
    };


    function sendTempatureToServer (event, value) { 
        HomeModel.setTempature({value})
            .then (res => {
                console.log(res)
                setLogs([...logs,`Set the thermostat to ${value}°F`])
            })
            .catch(err => console.log(err))
           

    };

    function showLastLog() {
        setLastLog(true)
        setInterval(() => {setLastLog(false)}, 4000);
        
    }
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
    //delete before production
    function onChange(event) {
        setInput(event.target.value)
    }

    
    let lightList;

    if (lights) {
        lightList = lights.map((element,idx) => {
            return <div key={idx} className="light"><Light toggleLight = {toggleLight} deleteLight ={deleteLight} id={idx}  checkOn={lights[idx] ? lights[idx].isOn : true} /></div>
        })

    };
    


        return (
            <div className="container1"> 
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
                        <Speech transcript ={transcript} transcriptCheck = {transcriptCheck}  key ="speech" toggleLight = {toggleLight} turnOn = {turnOnLightUsingSpeech}  turnOff = {turnOffLightUsingSpeech} />
                        <p> Your Text Command : <input value={input} onChange={onChange}></input> </p>
                        <CommandList/>
                        <Logs  logsAll ={logs} />  
                          
                    
                    </div>
                </div>
                
                <LastLog  lastLog={lastLog} logs= {logs} showLastLog = {showLastLog} />
                {/* <div className="wrapper">    <p className="sliding-background">Slide</p> </div> */}
            </div>
           
      
            
        )
    
}
