import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './styles/Information.css';

export default function Information({ setFormData, formData, setActiveStep }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  const validateField = (value, setter) => {
    if (!value.trim()) {
      setter(true);
    } else {
      setter(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    setFormData({
      ...formData,
      phoneNumber: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setActiveStep(4);
  };

  return (
    <>
      <h1
        style={{
          position: 'sticky',
          top: '0',
          backgroundColor: 'white',
          zIndex: '1',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        Enter your Information
      </h1>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <TextField
          required
          id="standard-required"
          name="firstName"
          label="First name"
          variant="standard"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
          sx={{ width: '100%', maxWidth: '500px' }}
        />
        <TextField
          required
          id="standard-required"
          name="lastName"
          label="Last name"
          variant="standard"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
          sx={{ width: '100%', maxWidth: '500px' }}
        />

        <TextField
          required
          id="standard-required"
          name="email"
          label="Enter your email"
          variant="standard"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          sx={{ width: '100%', maxWidth: '500px' }}
        />

        <PhoneInput
          placeholder="Enter phone number *"
          value={phoneNumber}
          onChange={handlePhoneChange}
          onBlur={() => validateField(phoneNumber, setPhoneError)}
          style={{
            width: '100%',
            maxWidth: '500px',
            borderBottomWidth: 0.5,
            borderBottom: 'solid',
          }}
          defaultCountry="US"
          international
          required
        />

        {phoneError && <span style={{ color: 'red' }}>Phone number is required</span>}

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </>
  );
}
