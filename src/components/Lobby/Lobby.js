import React from "react";
import { useState, createContext, useContext } from "react";
import AppContext from "../Context/Context";
import Player from "../Player/Player";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Box, color } from "@mui/system";
import { PlaylistRemoveTwoTone } from "@mui/icons-material";

const Lobby = () => {
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

  //mapping and passing props about the current player in the Context component
  return (
    <div>
      <AppContext.Provider value={{ players, setPlayers, changePlayerColor }}>
        <>
          {players.map((player) => (
            <Player key={player.id} player={player} />
          ))}
        </>
      </AppContext.Provider>

      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <ButtonGroup style={{ textAlign: "center" }} color="primary">
          <Button>
            {<PersonAddAlt1Icon />}
            Join
          </Button>
          <Button>
            {<ExitToAppIcon />}
            Exit
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Lobby;
