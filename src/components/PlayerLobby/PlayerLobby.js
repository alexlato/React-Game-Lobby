import React from "react";
import { useState, createContext, useContext } from "react";
import PlayerContext from "../Context/PlayerProvider";
import Player from "../Player/Player";

const PlayerLobby = (props) => {
  const { changePlayerColor, players } = useContext(PlayerContext);

  //player lobby that gets rendered by the mapping of Player
  return (
    <>
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </>
  );
};

export default PlayerLobby;
