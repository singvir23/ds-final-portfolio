import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../styles/Header.css';

const Header = () => (
  <AppBar position="fixed" className="header">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Viraaj Singh
      </Typography>
      <a href="#about" className="nav-link">
        <Button color="inherit">About</Button>
      </a>
      <a href="#projects" className="nav-link">
        <Button color="inherit">Projects</Button>
      </a>
      <a href="#reflection" className="nav-link">
        <Button color="inherit">Reflection</Button>
      </a>
    </Toolbar>
  </AppBar>
);

export default Header;
