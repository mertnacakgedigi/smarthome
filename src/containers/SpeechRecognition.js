/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Switch from '@material-ui/core/Switch';



export default function Speech(props) {

    const {transcript, resetTranscript } = useSpeechRecognition()
    const  [current , setChecked] = useState(true)
    const [lights ,setLights] =useState(props.lights)

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    };



  

    return (
        <div>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
        <p>{ }</p>
        <Switch
            checked= {transcript==="light off" || transcript=== "lights off"? false : current}
        />


      </div>
    )
}
