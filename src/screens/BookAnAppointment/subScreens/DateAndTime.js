import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Container, Button,Box } from '@mui/material';
import './styles/DateAndTime.css'


export default function DateAndTime({ selectedDate, setSelectedDate, setActiveStep, selectedAgent,setSelectedTime ,setIncompleteMsg}) {
      const [show, setShow] = useState(false)
  const handleAccept = (newDate) => {
    setSelectedDate(newDate);
    setShow(true)
   
   
  };
  
  const handleTime = (timeslot) => {
    setSelectedTime(timeslot);

  
   
setIncompleteMsg(false)
    setActiveStep(3);
  }

  return (
    <Container>
      <h1 style={{ position: 'sticky', top: '0', backgroundColor: 'white', zIndex: '1', padding: '10px' }}>
        Select Date And Time
      </h1>
        <Box sx={{display:{xs:'none',sm:'none',md:'block',lg:'block'}}}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} orientation="portrait">
          <StaticDatePicker
            value={selectedDate}
            onAccept={handleAccept}
            onChange={handleAccept}
            sx={{ width: '50%' }}
          />
        </LocalizationProvider>
      {show?  <div >
          <div style={{ marginRight: '10px',flexWrap:'wrap',display:'flex' }}>Available Time slots:</div>
          {selectedAgent.availableTimeSlot.map((timeSlot, index) => (
            <Button key={index} variant="contained" color="primary" style={{ margin: '5px',width:'40%' }}
                onClick={()=>handleTime(timeSlot)}
            >
              {timeSlot}
            </Button>
          ))}
        </div>:null}
      </div>

          </Box>
          
          <Box sx={{display:{xs:'block',sm:'block',md:'none',lg:'none'}}}>
          <div>
        <LocalizationProvider dateAdapter={AdapterDayjs} orientation="portrait">
          <StaticDatePicker
            value={selectedDate}
            onAccept={handleAccept}
            sx={{ width: '50%' }}
          />
        </LocalizationProvider>
      {
        show?  <div >
        <div style={{ marginRight: '10px',flexWrap:'wrap',display:'flex' }}>Available Time slots:</div>
        {selectedAgent.availableTimeSlot.map((timeSlot, index) => (
          <Button key={index} variant="contained" color="primary" style={{ margin: '5px',width:'40%' }}
              onClick={()=>handleTime(timeSlot)}
          >
            {timeSlot}
          </Button>
        ))}
      </div>:null
      }
      </div>

          </Box>
                    </Container>
  );
}
