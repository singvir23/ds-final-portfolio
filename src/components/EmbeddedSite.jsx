import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/EmbeddedSite.css';

const EmbeddedSite = ({ url, title }) => (
  <Card className="embedded-site">
    <CardContent>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <iframe
        src={url}
        title={title}
        loading="lazy"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </CardContent>
  </Card>
);

export default EmbeddedSite;
