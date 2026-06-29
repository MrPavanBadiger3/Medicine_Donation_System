import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Donate from './components/Donate';
import DonorsList from './components/DonorsList';
import AvailableMedicines from './components/AvailableMedicines';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider, CssBaseline, Container, Box } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Box component="main" sx={{ py: 4 }}>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/donorslist" element={<DonorsList />} />
              <Route path="/availablemedicines" element={<AvailableMedicines />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
