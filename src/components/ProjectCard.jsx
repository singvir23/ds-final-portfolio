import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Modal, Box } from '@mui/material';
import VideoEmbed from './VideoEmbed';
import EmbeddedSite from './EmbeddedSite';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, image, description, videoUrl, embeddedSiteUrl }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card className="project-card" onClick={handleOpen} style={{ cursor: 'pointer' }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        <CardContent style={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>

      <Modal open={open} onClose={handleClose} aria-labelledby={`${title}-modal`} className="modal">
        <Box className="modal-content">
          <Typography variant="h6" id={`${title}-modal`} gutterBottom align="center">
            {title}
          </Typography>
          {videoUrl && <VideoEmbed url={videoUrl} title={title} />}
          {embeddedSiteUrl && <EmbeddedSite url={embeddedSiteUrl} title={title} />}
          <Box textAlign="center" marginTop="1rem">
            <button onClick={handleClose} className="close-button">Close</button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ProjectCard;
