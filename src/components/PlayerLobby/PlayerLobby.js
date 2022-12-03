import React from "react";
import { useState, createContext, useContext } from "react";
import PlayerContext from "../Context/PlayerProvider";
import Player from "../Player/Player";
import { Container, Grid, Paper, Button } from "@mui/material";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const PlayerLobby = (props) => {
  const { players } = useContext(PlayerContext);

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch {}
  }

  //player lobby that gets rendered by the mapping of Player
  return (
    <>
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}

      <div>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={4}
            justifyContent="center"
            fontSize={18}
            alignItems="center"
            columns={4}
            paddingTop={8}
            paddingBottom={8}
            paddingLeft={8}
            paddingRight={8}
          >
            <Grid item xs={2} borderRadius={8}>
              <Paper>Email: {currentUser.email}</Paper>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            fontSize={18}
            alignItems="center"
            columns={4}
            paddingTop={8}
            paddingBottom={8}
            paddingLeft={8}
            paddingRight={8}
          >
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default PlayerLobby;
