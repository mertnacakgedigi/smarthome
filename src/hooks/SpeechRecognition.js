import React, {useState, useEffect} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import StopIcon from '@material-ui/icons/Stop';
import MicIcon from '@material-ui/icons/Mic';


export default function Speech(props) {



    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    };
    



    return (
        <div>
        <MicIcon style={{fontSize:"40px"}} onClick={SpeechRecognition.startListening}/>
        <StopIcon style={{fontSize:"40px"}} onClick={SpeechRecognition.stopListening}/>
    
        <p>{`Your Command: ${props.transcript}`}</p>
      </div>
    )
}
