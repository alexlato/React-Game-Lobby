import { render } from "@testing-library/react";
import React, { useState, createContext, useContext } from "react";
import PlayerLobby from "../PlayerLobby/PlayerLobby";

const AppContext = createContext(null);

export const Provider = () => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      color: null,
    },
    {
      id: 2,
      color: null,
    },
    {
      id: 3,
      color: null,
    },
    {
      id: 4,
      color: null,
    },
  ]);

  //calls changePlayerColor, passing a new playerId and newColor
  //checks memory location of array
  //filter callback to create a new array, only put the players in there that arent the ones being changed
  const changePlayerColor = (playerId, newColor) => {
    const newPlayers = players.filter((player) => {
      return playerId !== player.id;
    });

    //find player to update in new array
    const playerToUpdate = players.find((player) => {
      return player.id == playerId;
    });

    //new version of the player updating, set color to newColor
    const updatedPlayer = { ...playerToUpdate, color: newColor };

    //update new player to push player back in
    newPlayers.push(updatedPlayer);

    newPlayers.sort((a, b) => a.id - b.id);

    setPlayers(newPlayers);
  };

  return (
    <AppContext.Provider value={{ players, setPlayers, changePlayerColor }}>
      <>
        {players.map((player) => (
          <PlayerLobby key={player.id} player={player} />
        ))}
      </>
    </AppContext.Provider>
  );
};

export default AppContext;
