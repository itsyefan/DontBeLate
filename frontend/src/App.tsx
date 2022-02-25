import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { GoogleMap, useJsApiLoader, DistanceMatrixService } from "@react-google-maps/api";

const App: React.FC = () => {
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [trafficTime, setTrafficTime] = useState<string>("");

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  const service = new google.maps.DistanceMatrixService();


  const getTrafficTime = (e: React.FormEvent) => {

    e.preventDefault();

    service.getDistanceMatrix(
      {
        origins: [source],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      }, callback
      );

      function callback(response: any, status: any) {
        if (status == 'OK') {

          var origins = response.originAddresses;
          var destinations = response.destinationAddresses;

          for (var i = 0; i < origins.length; i++) {
            var results = response.rows[i].elements;
            
            for (var j = 0; j < results.length; j++) {
              var element = results[j];
              var distance = element.distance.text;
              var duration = element.duration.text;
              console.log(duration);
              var from = origins[i];
              var to = destinations[j];
            }
          }
        }
        else {
          console.log("Address was not found.")
        }
      }

    //setSource("");
    //setDestination("");
    //setTime("");
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
