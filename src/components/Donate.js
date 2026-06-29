import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, Paper } from '@mui/material';

const Donate = () => {
  const [formState, setFormState] = useState({
    donorName: '',
    contactNumber: '',
    medicineName: '',
    manufacturerName: '',
    manufactureDate: '',
    expireDate: '',
    description: '',
    quantity: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log(formState);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>Donate Medicine</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name="donorName" label="Donor Name" value={formState.donorName} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField name="contactNumber" label="Contact Number" value={formState.contactNumber} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField name="medicineName" label="Medicine Name" value={formState.medicineName} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField name="manufacturerName" label="Manufacturer Name" value={formState.manufacturerName} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField name="manufactureDate" label="Manufacture Date" type="date" value={formState.manufactureDate} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={6}>
              <TextField name="expireDate" label="Expire Date" type="date" value={formState.expireDate} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12}>
              <TextField name="description" label="Description" value={formState.description} onChange={handleChange} fullWidth multiline rows={4} />
            </Grid>
            <Grid item xs={6}>
              <TextField name="quantity" label="Quantity" value={formState.quantity} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField name="address" label="Address" value={formState.address} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Donate;
