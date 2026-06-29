import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Grid } from '@mui/material';

const Register = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    email: ''
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
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>Register</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name="username" label="Username" value={formState.username} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField name="password" label="Password" type="password" value={formState.password} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField name="email" label="Email" value={formState.email} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
