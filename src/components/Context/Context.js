import { useState, createContext, useContext  } from "react";
import React from "react";

const AppContext = createContext(null);



//<AppContext.Provider value={{colors, setColors, players, setPlayers}}>
//<>
    //{players.map((player) => (
        //<Player key={player.id} player={player} />
    //))}
//</>
//</AppContext.Provider>


export default AppContext;