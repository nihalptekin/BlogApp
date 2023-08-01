import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0, backgroundColor:"#b388ff", 
    height:70, display:"flex", justifyConten:"center", alignItems:"center", position:"fixed" }}>
      <Toolbar sx={{}}>
        <Typography variant="body1" color="inherit" sx={{ flexGrow: 1,  }}>
          Copyright© 2023   ❤︎   Design By Nihal Tekin
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
