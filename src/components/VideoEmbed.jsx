import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/VideoEmbed.css';

const VideoEmbed = ({ url, title }) => (
  <Card className="video-embed">
    <CardContent>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <div className="video-container">
        <iframe
          src={url}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </CardContent>
  </Card>
);

export default VideoEmbed;
