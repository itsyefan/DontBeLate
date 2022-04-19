import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import CalculationPage from './pages/CalculationPage';
import HabitsPage from './pages/HabitsPage';

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { config } from './config/config';
import AuthRoute from './components/AuthRoute';


const app = initializeApp(config.firebaseConfig);

const database = getDatabase(app);

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthRoute><CalculationPage /></AuthRoute>}/>
        <Route path="/register" element={<AuthPage />}/>
        <Route path="/habits" element={<AuthRoute> <HabitsPage /></AuthRoute>}/>
      </Routes>
    </Router>
  );
};


export default App;
