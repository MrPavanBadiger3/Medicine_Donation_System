import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import backgroundImage from '../assets/images/background.jpg';

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to the Medicine Donation System
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Donate your unused medicines and help those in need.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={RouterLink}
          to="/donate"
          sx={{ mt: 4 }}
        >
          Donate Now
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
