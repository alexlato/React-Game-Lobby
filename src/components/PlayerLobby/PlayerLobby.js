import React from "react";
import { useState, createContext, useContext } from "react";
import PlayerContext from "../Context/PlayerProvider";
import Player from "../Player/Player";
import { Container, Grid, Paper, Button, Avatar } from "@mui/material";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
            <input type="file" onChange={handleImageChange} />
            <Button onClick={handleUpload}>Upload</Button>
            <Avatar
              alt="Remy Sharp"
              src={url}
              sx={{ width: 150, height: 150 }}
            />
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default PlayerLobby;
