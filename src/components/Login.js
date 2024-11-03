// src/components/Login.js

import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    // Check if user exists and credentials are valid
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('auth', true); // Store authentication status
      navigate('/home'); // Redirect to home page after successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box className="container">
      <Box className="login-container">
        <Typography variant="h4">Login</Typography>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          error={!!error}
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          error={!!error}
          helperText={error}
        />
        <FormControlLabel
          control={<Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} />}
          label="Show Password"
        />
        <Button variant="contained" onClick={handleLogin} fullWidth>
          Login
        </Button>
        <Link to="/register" className="signup-link">
          Don’t have an account? Sign up
        </Link>
      </Box>
    </Box>
  );
};

export default Login;