import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Eq from './components/eq/Eq.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Сhamfers from './components/Сhamfers/Сhamfers.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='' element={<MainPage />}/>
          <Route path='/Сhamfers' element={<Сhamfers />}/>
          <Route path='/Eq' element={<Eq />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
