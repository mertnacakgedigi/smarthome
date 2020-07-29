import React from 'react'
import SpeechRecognition from 'react-speech-recognition'
import StopIcon from '@material-ui/icons/Stop';
import MicIcon from '@material-ui/icons/Mic';
import IconButton from '@material-ui/core/IconButton'

export default function Speech(props) {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    };
    
    return (
        <div className="speech">
            <IconButton><MicIcon className="icon" onClick={SpeechRecognition.startListening}/></IconButton> 
            <IconButton><StopIcon className="icon" onClick={SpeechRecognition.stopListening}/></IconButton> 
            <p>Your Voice Command : {props.transcript ?  props.transcript : `Waiting for recording`}</p>  
        </div>
    )
}
