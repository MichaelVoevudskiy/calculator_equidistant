import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Eq from './components/eq/Eq.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Bands from './components/Bands/Bands.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='' element={<MainPage />}/>
          <Route path='/Bands' element={<Bands />}/>
          <Route path='/Eq' element={<Eq />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
