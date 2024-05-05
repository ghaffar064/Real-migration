import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { TextField, Button, Box, Checkbox, Typography, Link } from '@mui/material';

export default function Signup() {
 

  return (
    <Layout>
        
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '90vh', 
          gap: '30px',
        }}
      >
        <TextField
          required
          id="standard-required"
          label="First name"
          variant="standard"
          type="text"
          placeholder="Enter first name"
          sx={{ width: '100%', maxWidth: '500px' }} 
        />
        <TextField
          required
          id="standard-required"
          label="Last name"
          variant="standard"
          type="text"
          placeholder="Enter last name"
          sx={{ width: '100%', maxWidth: '500px' }} 
        />
        <TextField
          required
          id="standard-required"
          label="Enter your email"
          variant="standard"
          type="email"
          placeholder="Email"
          sx={{ width: '100%', maxWidth: '500px' }} 
        />
        <TextField
          id="standard-password-input"
          label="Enter Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          placeholder="Enter Password"
          sx={{ width: '100%', maxWidth: '500px' }} 
        />
        <TextField
          id="standard-password-input"
          label="Confirm password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          placeholder="Confirm Password"
          sx={{ width: '100%', maxWidth: '500px' }} 
        />
       
        <Box sx={{ display: 'flex', gap: '25px', alignItems: 'center' }}> 
        <Button variant="contained" color="primary">
            Register
          </Button>
          <Button variant="contained" color="grey">
            Login
          </Button>
         
         
        </Box>
       
      </Box>
    </Layout>
  );
}
