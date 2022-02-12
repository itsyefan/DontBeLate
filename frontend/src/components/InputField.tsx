import React from 'react'

const InputField = () => {
  return (
    <form>
      <input type = "input" placeholder = "Enter a source" className="input_box"></input>
      <input type = "input" placeholder = "Enter a destination" className="input_box"></input>
      <input type = "input" placeholder = "Enter an arrival time" className="input_box"></input>
    </form>
    
  )
}

export default InputField;
