import React from 'react'
import "./style.css";

interface displayProperties {
    time: string;
    trafficTime: string;
}

const LeaveTimeDisplay: React.FC<displayProperties> = ({time, trafficTime}) => {
  return (
    <p className='timeDescription'>
        {console.log(trafficTime)}
        {trafficTime === "" ? "" :calcLeaveTime(time, trafficTime)}
    </p>
  )
}

//Calculates the time the user needs to leave the house
let calcLeaveTime = (originalTime: string, duration: string): string => {
    
    var timeSplit: string[] = originalTime.split(":");
    var durationSplit: string[] = duration.split(" ");

    var totalMinutes: number = (parseInt(timeSplit[0]) * 60) + (parseInt(timeSplit[1]));
    var leaveMinutes: number = totalMinutes - parseInt(durationSplit[0]);

    return "To reach the destination at " + amOrPm(totalMinutes) + ", you must leave at " + amOrPm(leaveMinutes);
}

//Converts from 24H time to 12H time
let amOrPm = (minutes: number): string => {
  var convertHours: number = Math.floor(minutes / 60);
  var convertMinutes: number = minutes % 60;

  var suffix: string = convertHours >= 12 ? "pm" : "am";

  var finalMinutes = convertMinutes < 10 
    ? "0" + convertMinutes 
    : convertMinutes;

  return suffix === "pm" 
    ? convertHours === 12 
      ? (convertHours) + ":" + finalMinutes + " " + suffix 
      : (convertHours % 12) + ":" + finalMinutes + " " + suffix 
    : convertHours + ":" + finalMinutes + " " + suffix;
}

export default LeaveTimeDisplay
