import { AppBar, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker';
import Contarst from './Components/Contarst';

function App() {
  return (
    <React.Fragment>
      <AppBar>
        <Typography variant='h3' sx={{textAlign:'center'}}>Color Adjustment Tool</Typography>
      </AppBar>
      <ColorPicker/>
      <Contarst/>
    </React.Fragment>
  );
}

export default App;
