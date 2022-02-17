import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [time, setTime] = useState<string>("");

  console.log(source);
  console.log(destination);
  console.log(time);

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap" rel="stylesheet"></link>
      
      <span className="heading">Don't Be Late</span>
      <InputField source={source} setSource={setSource} destination={destination} setDestination={setDestination} time={time} setTime={setTime}/>
    </div>
  );
}

export default App;
