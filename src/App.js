import React from 'react';

import Lights from './containers/Lights'
import Thermostat from './containers/Thermostat'
import SpeechRecognition from './containers/SpeechRecognition'


function App() {
  return (
    <div className="App">
      <Lights/>
      <Thermostat/>
      <SpeechRecognition/>
    </div>
  );
}

export default App;
