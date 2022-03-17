import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CalculationPage from './pages/CalculationPage';


const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalculationPage />}/>
      </Routes>
    </Router>
  );
};


export default App;
