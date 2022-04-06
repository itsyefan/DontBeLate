import React, { useState } from 'react';
import InputField from '../components/InputField';
import LeaveTimeDisplay from '../components/LeaveTimeDisplay';
import { useJsApiLoader } from "@react-google-maps/api";
import '../App.css';
import { getAuth, signOut } from 'firebase/auth';
import { Hero } from '../components/Hero';

function CalculationPage() {
    const auth = getAuth();

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

        function callback(response: google.maps.DistanceMatrixResponse | null, status: google.maps.DistanceMatrixStatus) {
            if (response != null) {
                var origins = response.originAddresses;
                var destinations = response.destinationAddresses;

                var results = response.rows[0].elements;

                var element = results[0];
                var duration = element.duration.text;
                var from = origins[0];
                var to = destinations[0];

                setTrafficTime(duration);

            }
            else {
                console.log("Address was not found.")
            }
        }
    };

    return (
        <div className="calcPage">
            <button onClick={() => signOut(auth)}>Sign Out</button>
            <Hero />
            <InputField source={source} setSource={setSource} destination={destination} setDestination={setDestination} time={time} setTime={setTime} getTrafficTime={getTrafficTime}></InputField>
            <LeaveTimeDisplay time={time} trafficTime={trafficTime} />
            
        </div>

    );
}

export default CalculationPage;