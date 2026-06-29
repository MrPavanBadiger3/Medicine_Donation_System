import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const DonorsList = () => {
  const donors = [
    // Sample data
    { name: 'John Doe', address: '123 Main St', medicine: 'Aspirin', quantity: '20' },
    { name: 'Jane Smith', address: '456 Oak Ave', medicine: 'Ibuprofen', quantity: '10' },
  ];

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>Donors List</Typography>
        <List>
          {donors.map((donor, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${donor.name} - ${donor.medicine} (${donor.quantity})`} secondary={donor.address} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default DonorsList;
