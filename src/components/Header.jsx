import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../styles/Header.css';

const Header = () => (
  <AppBar position="fixed" className="header">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Viraaj Singh
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
