import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Container, Typography, Card, CardContent } from '@mui/material';

// Custom marker icons
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style='background-color:${color};' class='marker-pin'></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30]
  });
};

const ProjectMap = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Project locations
  const projectLocations = [
    {
        title: 'Hypertext Project',
        position: [38.9072, -77.0369], // Washington, DC
        color: '#FF6B6B',
        project: projects.find(p => p.title === 'Hypertext Project')
    },
    {
        title: 'Poetic Data',
        position: [38.9897, -76.9378], // College Park, MD
        color: '#4ECDC4',
        project: projects.find(p => p.title === 'Poetic Data')
    },
    {
        title: 'Remix Project',
        position: [40.7128, -74.0060], // New York City
        color: '#45B7D1',
        project: projects.find(p => p.title === 'Remix Project')
    },
    {
        title: 'Seattle Visit',
        position: [47.6062, -122.3321], // Seattle, WA
        color: '#6A5ACD'
    },
    {
        title: 'San Francisco Adventure',
        position: [37.7749, -122.4194], // San Francisco, CA
        color: '#20B2AA'
    },
    {
        title: 'LA Exploration',
        position: [34.0522, -118.2437], // Los Angeles, CA
        color: '#FF69B4'
    },
    {
        title: 'Boise Stop',
        position: [43.6150, -116.2023], // Boise, ID
        color: '#1E90FF'
    },
    {
        title: 'Billings Journey',
        position: [45.7833, -108.5067], // Billings, MT
        color: '#32CD32'
    },
    {
        title: 'Orlando Visit',
        position: [28.5383, -81.3792], // Orlando, FL
        color: '#FF4500'
    },
    {
        title: 'Miami Expedition',
        position: [25.7617, -80.1918], // Miami, FL
        color: '#FF6347'
    },
    {
        title: 'Durham Exploration',
        position: [35.9940, -78.8986], // Durham, NC
        color: '#4682B4'
    },
    {
        title: 'Boston Trip',
        position: [42.3601, -71.0589], // Boston, MA
        color: '#8A2BE2'
    },
    {
        title: 'Providence Stop',
        position: [41.8240, -71.4128], // Providence, RI
        color: '#00CED1'
    },
    {
        title: 'Houston Journey',
        position: [29.7604, -95.3698], // Houston, TX
        color: '#FF1493'
    },
    {
        title: 'San Diego Adventure',
        position: [32.7157, -117.1611], // San Diego, CA
        color: '#00FF7F'
    },
    {
        title: 'Philadelphia Visit',
        position: [39.9526, -75.1652], // Philadelphia, PA
        color: '#DA70D6'
    },
    {
        title: 'Ghent Exploration',
        position: [51.0543, 3.7174], // Ghent, Belgium
        color: '#F4A460'
    },
    {
        title: 'Cologne Journey',
        position: [50.9375, 6.9603], // Cologne, Germany
        color: '#48D1CC'
    },
    {
        title: 'Black Forest Trip',
        position: [48.0783, 8.2119], // Black Forest, Germany
        color: '#00FA9A'
    },
    {
        title: 'Amsterdam Stop',
        position: [52.3676, 4.9041], // Amsterdam, Netherlands
        color: '#FF4500'
    },
    {
        title: 'Madrid Exploration',
        position: [40.4168, -3.7038], // Madrid, Spain
        color: '#1E90FF'
    },
    {
        title: 'Lisbon Journey',
        position: [38.7223, -9.1393], // Lisbon, Portugal
        color: '#32CD32'
    },
    {
        title: 'Lucerne Visit',
        position: [47.0502, 8.3093], // Lucerne, Switzerland
        color: '#FF69B4'
    },
    {
        title: 'Pretoria Expedition',
        position: [-25.7479, 28.2293], // Pretoria, South Africa
        color: '#4682B4'
    },
    {
        title: 'Johannesburg Stop',
        position: [-26.2041, 28.0473], // Johannesburg, South Africa
        color: '#8A2BE2'
    },
    {
        title: 'Cape Town Adventure',
        position: [-33.9249, 18.4241], // Cape Town, South Africa
        color: '#20B2AA'
    },
    {
        title: 'Bangalore Journey',
        position: [12.9716, 77.5946], // Bangalore, India
        color: '#FF1493'
    },
    {
        title: 'Delhi Exploration',
        position: [28.6139, 77.2090], // Delhi, India
        color: '#00FF7F'
    },
    {
        title: 'Chandigarh Visit',
        position: [30.7333, 76.7794], // Chandigarh, India
        color: '#DA70D6'
    },
    {
        title: 'Hyderabad Stop',
        position: [17.3850, 78.4867], // Hyderabad, India
        color: '#F4A460'
    },
    {
        title: 'Paris Trip',
        position: [48.8566, 2.3522], // Paris, France
        color: '#48D1CC'
    },
    {
        title: 'Tokyo Expedition',
        position: [35.6762, 139.6503], // Tokyo, Japan
        color: '#6A5ACD'
    },
    {
        title: 'Kyoto Journey',
        position: [35.0116, 135.7681], // Kyoto, Japan
        color: '#00CED1'
    },
    {
        title: 'Shibuya Exploration',
        position: [35.6595, 139.7003], // Shibuya, Tokyo, Japan
        color: '#FF4500'
    },
    {
        title: 'Seoul Visit',
        position: [37.5665, 126.9780], // Seoul, South Korea
        color: '#1E90FF'
    },
    {
        title: 'Singapore Stop',
        position: [1.3521, 103.8198], // Singapore
        color: '#32CD32'
    },
    {
        title: 'Kuala Lumpur Adventure',
        position: [3.1390, 101.6869], // Kuala Lumpur, Malaysia
        color: '#FF69B4'
    },
    {
        title: 'Whistler Journey',
        position: [50.1167, -122.9500], // Whistler, Canada
        color: '#4682B4'
    },
    {
        title: 'Vancouver Exploration',
        position: [49.2827, -123.1207], // Vancouver, Canada
        color: '#8A2BE2'
    },
    {
        title: 'Big White Ski Resort',
        position: [49.7519, -118.9319], // Big White Ski Resort, BC, Canada
        color: '#20B2AA'
    },
    {
        title: 'Banff Visit',
        position: [51.1784, -115.5708], // Banff, Canada
        color: '#FF1493'
    },
    {
        title: 'Toronto Stop',
        position: [43.6532, -79.3832], // Toronto, Canada
        color: '#00FF7F'
    },
    {
        title: 'Brussels Journey',
        position: [50.8503, 4.3517], // Brussels, Belgium
        color: '#DA70D6'
    },
    {
        title: 'Sun Peaks Ski Resort',
        position: [50.8853, -119.8458], // Sun Peaks Ski Resort, BC, Canada
        color: '#F4A460'
    },
    {
        title: 'Cincinnati Exploration',
        position: [39.1031, -84.5120], // Cincinnati, OH
        color: '#48D1CC'
    }
];

  return (
    <Container sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography variant="h4" gutterBottom align="center">
        Project Locations
      </Typography>
      <div style={{ height: '500px', width: '100%' }}>
        <MapContainer 
          center={[39.8283, -98.5795]} // Centered on USA
          zoom={4} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {projectLocations.map((location, index) => (
            <Marker
              key={index}
              position={location.position}
              icon={createCustomIcon(location.color)}
              eventHandlers={{
                click: () => setSelectedProject(location)
              }}
            >
              <Popup>
                <div>
                  <h3>{location.title}</h3>
                  {location.project && (
                    <div>
                      <p>{location.project.description}</p>
                      {location.project.videoUrl && (
                        <a 
                          href={location.project.videoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Project Video
                        </a>
                      )}
                      {location.project.embeddedSiteUrl && (
                        <a 
                          href={location.project.embeddedSiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Project Site
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {selectedProject && (
        <Card sx={{ marginTop: '1rem' }}>
          <CardContent>
            <Typography variant="h5">{selectedProject.title}</Typography>
            <Typography variant="body1">
              {selectedProject.project.description}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default ProjectMap