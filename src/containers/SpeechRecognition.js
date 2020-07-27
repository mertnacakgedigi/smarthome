import React, {useState, useEffect} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Switch from '@material-ui/core/Switch';



export default function Speech(props) {



    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    };
    


  

    return (
        <div>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
    
        <p>{props.transcript}</p>
    


      </div>
    )
}
