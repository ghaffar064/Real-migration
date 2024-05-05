import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { TextField, Button, Box, Checkbox, Typography, Link } from '@mui/material';

export default function Login() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Layout>
        
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '90vh', // Adjust height as needed
          gap: '30px', // Add margin between input fields and buttons
        }}
      >
        <TextField
          required
          id="standard-required"
          label="Enter your email"
          variant="standard"
          type="email"
          placeholder="Email"
          sx={{ width: '100%', maxWidth: '500px' }} // Adjust width for responsiveness
        />
        <TextField
          id="standard-password-input"
          label="Enter your Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          placeholder="Enter Password"
          sx={{ width: '100%', maxWidth: '500px' }} // Adjust width for responsiveness
        />
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}> {/* Container for Checkbox and text */}
          <Checkbox
            checked={checked}
            onChange={handleCheckboxChange}
            inputProps={{ 'aria-label': 'Keep me signed in' }}
          />
          <span>Keep me signed in</span>
        </Box>
        <Box sx={{ display: 'flex', gap: '25px', alignItems: 'center' }}> {/* Wrapper for buttons and Forgot Password */}
          <Button variant="contained" color="primary">
            Login
          </Button>
          <Button variant="contained" color="grey">
            Register
          </Button>
         
        </Box>
        <Typography variant="body2">
            <Link href="#" color="textSecondary">
              Forgot Password?
            </Link>
          </Typography>
      </Box>
    </Layout>
  );
}
