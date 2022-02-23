import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { GoogleMap, DistanceMatrixService } from "@react-google-maps/api";

const App: React.FC = () => {
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [trafficTime, setTrafficTime] = useState<string>("");

  const service = new google.maps.DistanceMatrixService(); //THIS IS WHERE ITS ALL GOING WRONG :((((


  console.log(source);
  console.log(destination);
  console.log(time);

  const getTrafficTime = (e: React.FormEvent) => {


    e.preventDefault();

    /**const request = {
      origins: [source],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    };

    (document.getElementById("request") as HTMLDivElement).innerText =
    JSON.stringify(request, null, 2);**/

  };



  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap" rel="stylesheet"></link>

      <span className="heading">Don't Be Late</span>
      <InputField source={source} setSource={setSource} destination={destination} setDestination={setDestination} time={time} setTime={setTime} getTrafficTime={getTrafficTime}></InputField>

    </div>
  );
};


export default App;
