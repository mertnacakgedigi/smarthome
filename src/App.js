import React from 'react';

import Lights from './containers/Lights'
import Thermostat from './containers/Thermostat'
import Speech from './containers/SpeechRecognition'


class App extends React.Component {

  render () {

    console.log("APP","hey")
    return (
      <div className="App">
        <Lights/>
        <Thermostat/>
        <Speech/>
      </div>
    );
  }

}

export default App;
