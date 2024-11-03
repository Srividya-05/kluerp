// src/components/Home.js

import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="green.100"
      color="grey.800"
    >
      <Typography variant="h3">Welcome to the Home Page</Typography>
    </Box>
  );
};

export default Home;