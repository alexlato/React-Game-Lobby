import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Paper from '@mui/material/Paper';
import red from '@mui/material/colors/red';
import green from '@mui/material/colors/green';
import blue from '@mui/material/colors/blue';
import yellow from '@mui/material/colors/yellow';
import { ClassNames } from '@emotion/react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/material/styles';
import Header from './components/Header/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
