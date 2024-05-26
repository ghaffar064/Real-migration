import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function Cart({ selectedService, selectedAgent, selectedDate,formData,selectedTime,setActiveStep }) {
  
  const bookingHandler = async () => {
    try {
      const response = await axios.post('/booking/checkout', {
        serviceId: selectedService.id,
        agentMARN: selectedAgent.MARN,
        date: selectedDate.format(),
        time: selectedTime,
        customerFirstName: formData.firstName,
        customerLastName:formData.lastName,
        customerPhoneNumber:formData.phoneNumber,
        customerEmail:formData.email
      });
      if (response.data.success) {
        window.location.href = response.data.sessionUrl; 
       
      } else {
        console.error('Checkout error:', response.data.msg);
        alert('Error during checkout: ' + response.data.msg);
      }
    } catch (error) {
      console.error('Error during checkout:', error.response || error.message || error);
      alert('An error occurred while processing your payment. Please try again.');
    }
  };

  return (
   
    <Box
      sx={{
        marginTop: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        
      }}
    >
      <Typography variant="h4" component="h2" align="center" sx={{ marginBottom: '20px' }}>
        <ShoppingCartIcon sx={{ fontSize: 40, marginRight: '10px', color: '#f56c6c' }} />
        Your Cart
      </Typography>

      <Card sx={{ border: '1px solid #ccc', marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6" component="h3">
            Selected Service
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
            {selectedService.VisaType}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
            Price: {selectedService.Price}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Details: {selectedService.Details}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ border: '1px solid #ccc', marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6" component="h3">
            Selected Agent
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
            Name: {selectedAgent.agentName}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
            MARN: {selectedAgent.MARN}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Languages Spoken: {selectedAgent.languagesSpoken}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ border: '1px solid #ccc', marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6" component="h3">
            Selected Date and Time
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
            Date: {selectedDate.format('YYYY-MM-DD')}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Time: {selectedTime}
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{justifyContent:'center',display:'flex'}}>
      <Button onClick={bookingHandler} style={{backgroundColor:'red',
      paddingRight:15,paddingLeft:15}}>Pay Now</Button>
      </Box>
    </Box>

  );
}
