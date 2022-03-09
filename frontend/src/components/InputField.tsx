import React from 'react';
import "./style.css";

interface lookupProperties {
  source: string;
  setSource: React.Dispatch<React.SetStateAction<string>>;
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  getTrafficTime: (e: React.FormEvent) => void;
}

const InputField: React.FC<lookupProperties> = ({source, setSource, destination, setDestination, time, setTime, getTrafficTime}) => {

  return (
    //Fields for address and time input
    <form data-testid="field-container" className="input" onSubmit={getTrafficTime}>
      <input type="text"
        placeholder="Enter a source"
        data-testid="source-field"
        className="inputBox"
        value={source}
        onChange={
          e => setSource(e.target.value)
        }
      />

      <input type="text"
        placeholder="Enter a destination"
        data-testid="destination-field"
        className="inputBox"
        value={destination}
        onChange={
          e => setDestination(e.target.value)
        }
      />

      <input type="time"
        placeholder="Enter an arrival time"
        data-testid="arrival-field"
        className="inputBox"
        value={time}
        onChange={
          e => setTime(e.target.value)
        }
      />

      <button type="submit"
        data-testid="submit-button"
        className='submitButton'>
        Submit
      </button>

    </form>

  )
}

export default InputField;
