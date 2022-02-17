import React from 'react';
import "./style.css";

interface Props {
  source: string;
  setSource: React.Dispatch<React.SetStateAction<string>>;
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({source, setSource, destination, setDestination, time, setTime}) => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // ???
  }

  return (
    //Fields for address and time input
    <form data-testid="field-container" className="input">
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

      <button type="button"
        data-testid="submit-button"
        className='submitButton'>
        Submit
      </button>

    </form>

  )
}

export default InputField;
