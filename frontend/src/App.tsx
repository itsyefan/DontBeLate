import React from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap" rel="stylesheet"></link>
      
      <span className="heading">Don't Be Late</span>
      <InputField />
    </div>
  );
}

export default App;
