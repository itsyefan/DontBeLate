import React from 'react';
import "./style.css";

const InputField = () => {
  return (
    //Fields for address and time input
    <form data-testid="container" className="input"> 
      <input type = "text" placeholder = "Enter a source" data-testid="field-1" className="inputBox"></input>
      <input type = "text" placeholder = "Enter a destination" data-testid="field-2" className="inputBox"></input>
      <input type = "time" placeholder = "Enter an arrival time" data-testid="field-3" className="inputBox"></input>
      <button type="button" data-testid="button-1" className='submitButton'>Submit</button>
    </form>
    
  )
}

export default InputField;
