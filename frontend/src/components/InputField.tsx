import React from 'react';
import "./style.css";

const InputField = () => {
  return (
    <form className="input">
      <input type = "text" placeholder = "Enter a source" className="inputBox"></input>
      <input type = "text" placeholder = "Enter a destination" className="inputBox"></input>
      <input type = "time" placeholder = "Enter an arrival time" className="inputBox"></input>
      <button type="button" className='submitButton'>Submit</button>
    </form>
    
  )
}

export default InputField;
