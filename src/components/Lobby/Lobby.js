import React from 'react';
import { useState, createContext, useContext } from "react";
import AppContext from '../Context/Context';
import Player from '../Player/Player';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Box, color } from '@mui/system';
import { blue, green, red, yellow, lightBlue } from '@mui/material/colors';





const Lobby = () => {


    const [colors, setColors] = useState([
      {value: red[500], label: 'red', disabled:false},
      {value: green[500], label: 'green', disabled:false},
      {value: blue[500], label: 'blue', disabled:false},
      {value: yellow[500], label: 'yellow', disabled:false},
      {value: lightBlue[50], label: 'light blue', disabled:false},
    ])
  
    const [players, setPlayers] = useState([
      {
        id: 1,
        color: 'lightBlue'
      },
      {
        id: 2,
        color: 'lightBlue'
      },      
      {
        id: 3,
        color: 'lightBlue'
      },      
      {
        id: 4,
        color: 'lightBlue'
      },
    ])
  

    const handleChange = (event) => {
      setColors(event.target.value)
    }


    return (
    <div>
      <AppContext.Provider value={{colors, setColors, players, setPlayers, handleChange}}>
        <>
          {players.map((player) => (
            <Player key={player.id} player={player}/>
          ))}    
        </>
      </AppContext.Provider>

        <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
                          
            <ButtonGroup style={{textAlign:"center"}} color="primary">
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
}

export default Lobby;