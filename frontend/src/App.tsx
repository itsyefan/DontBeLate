import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import CalculationPage from './pages/CalculationPage';
import { initializeApp } from "firebase/app";
import { config } from './config/config';
import AuthRoute from './components/AuthRoute';

initializeApp(config.firebaseConfig);

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthRoute><CalculationPage /></AuthRoute>}/>
        <Route path="/register" element={<AuthPage />}/>
      </Routes>
    </Router>
  );
};


export default App;
