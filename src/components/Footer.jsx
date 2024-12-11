import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import '../styles/Footer.css';

const Footer = () => (
  <Box className="footer">
    <Typography variant="body1" align="center">
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </Typography>
    <Typography variant="body2" align="center">
      <Link href="mailto:your.email@example.com" color="inherit" target="_blank" rel="noopener">
        your.email@example.com
      </Link>
      {' | '}
      <Link href="https://github.com/yourusername" color="inherit" target="_blank" rel="noopener">
        GitHub
      </Link>
      {' | '}
      <Link href="https://linkedin.com/in/yourprofile" color="inherit" target="_blank" rel="noopener">
        LinkedIn
      </Link>
    </Typography>
  </Box>
);

export default Footer;
