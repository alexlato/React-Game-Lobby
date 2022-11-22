import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, AppContext } from "./components/Context/Context";
import PlayerLobby from "./components/PlayerLobby/PlayerLobby";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/">
              {" "}
              <PlayerLobby />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
