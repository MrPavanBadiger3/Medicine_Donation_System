import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Medicine Donation System
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">Home</Button>
          <Button color="inherit" component={RouterLink} to="/donate">Donate Now</Button>
          <Button color="inherit" component={RouterLink} to="/donorslist">Donors List</Button>
          <Button color="inherit" component={RouterLink} to="/availablemedicines">Available Medicines</Button>
          <Button color="inherit" component={RouterLink} to="/login">Login</Button>
          <Button color="inherit" component={RouterLink} to="/register">Register</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
