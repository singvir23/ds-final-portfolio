import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Reflection = () => (
  <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
    <Typography variant="h4" gutterBottom>Reflection</Typography>
    <Typography variant="body1" paragraph>
      [Your reflection essay content here...]
    </Typography>
    <Typography variant="body1">
      <Link href="/path-to-reflection.pdf" target="_blank" rel="noopener noreferrer">
        Download Reflection Essay (PDF)
      </Link>
    </Typography>
  </Container>
);

export default Reflection;
