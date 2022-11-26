import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PlayerProvider } from "./components/Context/PlayerProvider";
import PlayerLobby from "./components/PlayerLobby/PlayerLobby";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <PlayerProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/playerlobby" element={<PlayerLobby />} />
        </Routes>
      </Router>
    </PlayerProvider>
  );
};

export default App;
