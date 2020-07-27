import React, {useState, useEffect} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Switch from '@material-ui/core/Switch';



export default function Speech(props) {

    const {transcript, resetTranscript } = useSpeechRecognition("")
    const  [current , setChecked] = useState(true)
    const [lights ,setLights] =useState(true)

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    };
    

    let checked = false
    // function speechToggle () {


    //     if (transcript === "light on") {
    //         useEffect(()=> {
    //             setLights(true)
    //         },[transcript])
    //     }

    //     return lights

    // }
   
    // speechToggle()
  

    const special = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
    let index = special.indexOf(transcript.split(" ")[3])
   

 
    function sendIndex()  {
        if (index === -1) return

        console.log(transcript)
        console.log(index)
        props.toggleLight(index)
    }
    sendIndex()
    // if (transcript === "light off" || transcript === "lights off") {
     

    // }


    // if (transcript === "open light" || transcript === "open lights") {
     
    //         checked = true
       
    // }


  

    return (
        <div>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
        <p>{ index ===-1 ? "Try Again" : index }</p>
        <Switch
            checked= {checked}

         
        />


      </div>
    )
}
