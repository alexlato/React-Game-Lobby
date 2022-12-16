import React, { useState, createContext, useContext } from "react";
import { useEffect } from "react";
import axios from "axios";

const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState(() => {
    const fallbackPlayers = [
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
    ];

    const localStoragePlayers = localStorage.getItem("players");
    if (localStoragePlayers !== null) {
      return JSON.parse(localStoragePlayers);
    } else {
      return fallbackPlayers;
    }
  });

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-react-game-lobby-ece8f.cloudfunctions.net/getColors"
      )
      .then((res) => setPlayers(res.data))
      .catch(console.log);
  }, []);

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
    <PlayerContext.Provider value={{ players, setPlayers, changePlayerColor }}>
      <>{children}</>
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
