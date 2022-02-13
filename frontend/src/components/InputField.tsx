import React from 'react';
import "./style.css";

const InputField = () => {
  return (
    //Fields for address and time input
    <form data-testid="field-container" className="input"> 
      <input type = "text" placeholder = "Enter a source" data-testid="source-field" className="inputBox"></input>
      <input type = "text" placeholder = "Enter a destination" data-testid="destination-field" className="inputBox"></input>
      <input type = "time" placeholder = "Enter an arrival time" data-testid="arrival-field" className="inputBox"></input>
      <button type="button" data-testid="submit-button" className='submitButton'>Submit</button>
    </form>
    
  )
}

export default InputField;
