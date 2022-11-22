import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lobby from "./components/Lobby/Lobby";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Lobby />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
