import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

const AvailableMedicines = () => {
  const medicines = [
    // Sample data
    { name: 'Aspirin', description: 'Pain reliever', quantity: '20' },
    { name: 'Ibuprofen', description: 'Anti-inflammatory', quantity: '10' },
  ];

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Available Medicines</Typography>
      <Grid container spacing={4}>
        {medicines.map((medicine, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">{medicine.name}</Typography>
                <Typography variant="body2" color="textSecondary">{medicine.description}</Typography>
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body2">Quantity: {medicine.quantity}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableMedicines;
