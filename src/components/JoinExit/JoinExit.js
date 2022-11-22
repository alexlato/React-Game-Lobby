import React from "react";
import { useState, createContext, useContext } from "react";
import AppContext from "../Context/Context";
import PlayerLobby from "../PlayerLobby/PlayerLobby";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Box } from "@mui/system";

const JoinExit = () => {
  return (
    <div>
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

export default JoinExit;
