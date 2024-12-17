import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Eq from './components/eq/Eq.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Сhamfers from './components/Сhamfers/Сhamfers.jsx';
import Weight from './components/Weight/Weight.jsx'

import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='' element={<MainPage />}/>
          <Route path='/chamfers' element={<Сhamfers />}/>
          <Route path='/eq' element={<Eq />}/>
          <Route path='/weight' element={<Weight />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
