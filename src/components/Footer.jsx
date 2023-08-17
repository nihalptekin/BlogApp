import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Footer>  <Typography color="primary" sx={{ bottom: 0, backgroundColor:"#b388ff", 
    p:1, display:"flex", justifyContent:"center", alignItems:"center",  }}>
      <Toolbar sx={{}}>
        <Typography variant="body1" color="inherit" sx={{ flexGrow: 1,  }}>
          Copyright ©  2023   ❤︎   Developed By Nihal Tekin  
        </Typography>
      </Toolbar> 
    </Typography>
    </Footer>

  );
};

export default Footer;
