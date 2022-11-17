import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayerCard from './components/PlayerCard/PlayerCard';
import Header from './components/Header/Header';

function App() {

  return(
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<PlayerCard/>}/>
        <Route path="/Header" element={<Header/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
