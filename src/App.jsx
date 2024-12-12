import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import ProjectMap from './components/ProjectMap';
import '../src/styles/main.css';

const App = () => {
  const projects = [
    {
      title: 'Remix Project',
      image: '/assets/Remix.png',
      description: 'A creative remix of existing digital narratives, enhancing them with interactive elements and modern design.',
      videoUrl: 'https://drive.google.com/file/d/1l-pR-BDtWQozkyewHxiN5ypcmybSWi_Q/preview',
      embeddedSiteUrl: null,
      location: 'New York City'
    },
    {
      title: 'Poetic Data',
      image: '/assets/PoeticData.png',
      description: 'An innovative project exploring the boundaries of digital storytelling through immersive media.',
      videoUrl: 'https://drive.google.com/file/d/1jNEBCOEhuOBkHRhTFRxOpPk1VvdErDho/preview',
      embeddedSiteUrl: null,
      location: 'College Park'
    },
    {
      title: 'Hypertext Project',
      image: '/assets/Hypertext.png',
      description: 'A hypertext-based narrative that allows users to navigate through multiple storylines seamlessly.',
      videoUrl: null,
      embeddedSiteUrl: 'https://ds-assignment-6hf27d2mo-singvir23s-projects.vercel.app/',
      location: 'Washington, DC'
    },
  ];

  return (
    <div>
      <Header />
      <Container sx={{ marginTop: '100px', paddingBottom: '2rem' }}>
        {/* Project Map Section */}
        <ProjectMap projects={projects} />

        {/* Projects Section */}
        <section id="projects" style={{ marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom align="center">
            My Projects
          </Typography>
          <Grid container spacing={4} direction="column" alignItems="center">
            {projects.map((project, index) => (
              <Grid item xs={12} key={index} style={{ width: '100%', maxWidth: '800px' }}>
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  videoUrl={project.videoUrl}
                  embeddedSiteUrl={project.embeddedSiteUrl}
                />
              </Grid>
            ))}
          </Grid>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
