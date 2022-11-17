import React from 'react';
import { useState, createContext, useContext } from "react";
import Select from '@mui/material/Select';
import App from "../../App";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ClassNames } from '@emotion/react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import AppContext from '../Context/Context';
import Player from '../Player/Player';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Box, color } from '@mui/system';
import Header from '../Header/Header';
import { blue, green, red, yellow } from '@mui/material/colors';




function PlayerCard () {


    const colors = red[500]
  
    const [playerColorOne, setColorOne] = useState(colors)
    const [playerColorTwo, setColorTwo] = useState(colors)
    const [playerColorThree, setColorThree] = useState(colors)
    const [playerColorFour, setColorFour] = useState(colors)

    const onehandleChange = (event) => {
    setColorOne(event.target.value)
    }

    const twohandleChange = (event) => {
    setColorTwo(event.target.value)
    }

    const threehandleChange = (event) => {
    setColorThree(event.target.value)
    }

    const fourhandleChange = (event) => {
    setColorFour(event.target.value)
    }


    return (
    <div>
    <Container maxWidth='xl'>
        <Grid container spacing={4} justifyContent="center" fontSize={18} alignItems="center" columns={4} paddingTop={8} paddingBottom={8} paddingLeft={8} paddingRight={8}>
          <Grid item xs ={2} backgroundColor={playerColorOne} borderRadius={8}>
            <Paper className= {ClassNames.customBorderRadius}>Player 1</Paper>
            <FormControl>
          <InputLabel></InputLabel>
          <Select
            value={(colors)}
            onChange={onehandleChange}
         
            >
            <MenuItem value={'Red'}>Red</MenuItem>
            <MenuItem value={'Green'}>Green</MenuItem> 
            <MenuItem value={'Blue'}>Blue</MenuItem> 
            <MenuItem value={'Yellow'}>Yellow</MenuItem> 


            </Select>
        </FormControl>
          </Grid>
          <Grid item xs ={2} backgroundColor={playerColorTwo} borderRadius={8}>
            <Paper className= {ClassNames.Paper}>Player 2</Paper>
            <FormControl>
          <InputLabel></InputLabel>
          <Select
            value={(colors)}
            onChange={twohandleChange}
            >
            <MenuItem value={'Red'}>Red</MenuItem>
            <MenuItem value={'Green'}>Green</MenuItem> 
            <MenuItem value={'Blue'}>Blue</MenuItem> 
            <MenuItem value={'Yellow'}>Yellow</MenuItem> 


            </Select>
        </FormControl>
          </Grid>
          <Grid item xs ={2} backgroundColor={playerColorThree} borderRadius={8}>
            <Paper className= {ClassNames.Paper}>Player 3</Paper>
            <FormControl>
          <InputLabel></InputLabel>
          <Select
            value={(colors)}
            onChange={threehandleChange}
            >
            <MenuItem value={'Red'}>Red</MenuItem>
            <MenuItem value={'Green'}>Green</MenuItem> 
            <MenuItem value={'Blue'}>Blue</MenuItem> 
            <MenuItem value={'Yellow'}>Yellow</MenuItem> 


            </Select>
        </FormControl>
          </Grid>
          <Grid item xs ={2} backgroundColor={playerColorFour} borderRadius={8}>
            <Paper className= {ClassNames.Paper}>Player 4</Paper>
            <FormControl>
          <InputLabel></InputLabel>
          <Select
            value={(colors)}
            onChange={fourhandleChange}
            >
            <MenuItem value={'Red'}>Red</MenuItem>
            <MenuItem value={'Green'}>Green</MenuItem> 
            <MenuItem value={'Blue'}>Blue</MenuItem> 
            <MenuItem value={'Yellow'}>Yellow</MenuItem> 


            </Select>
        </FormControl>
          </Grid>
        </Grid>
    </Container>


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

export default PlayerCard;