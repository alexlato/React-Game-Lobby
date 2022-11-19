import React from 'react';
import { useState, createContext, useContext } from "react";
import AppContext from '../Context/Context';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { ClassNames, withTheme } from '@emotion/react';
import { lightBlue } from '@mui/material/colors';

const Player = (player) => {
 
const {colors, setColors, players, setPlayers, handleChange} = useContext(AppContext)

    return (
        <div>
            <Container maxWidth='xl'>
            <Grid container spacing={4} justifyContent="center" fontSize={18} alignItems="center" columns={4} paddingTop={8} paddingBottom={8} paddingLeft={8} paddingRight={8}>
            <Grid item xs ={2} backgroundColor={colors} borderRadius={8}>
                <Paper className= {ClassNames.customBorderRadius}>Player</Paper>
                <FormControl>
              <InputLabel></InputLabel>
              <Select
                value={(colors)}
                onChange={(handleChange)}

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
        </div>
    );
}

export default Player;
 