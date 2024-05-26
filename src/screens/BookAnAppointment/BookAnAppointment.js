import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import dayjs from 'dayjs';
import Layout from '../../components/Layout/Layout';
import MigrationAgent from './subScreens/MigrationAgent';
import Service from './subScreens/Service';
import DateAndTime from './subScreens/DateAndTime';
import Cart from './subScreens/Cart';
import Information from './subScreens/Information';
import Confirmation from './subScreens/Confirmation';
import { useLocation } from 'react-router-dom';

const steps = ['Migration Agent', 'Service', 'Date And Time', 'Information', 'Cart', 'Confirmation'];

export default function BookAnAppointment() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dayjs('2024-05-13T15:30'));
  const [selectedAgent, setSelectedAgent] = useState({});
  const [selectedService, setSelectedService] = useState({});
  const [incompleteMsg, setIncompleteMsg] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null)
  console.log(selectedTime)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
   
    phoneNumber: '',
  });
  const location = useLocation();

  useEffect(() => {
    // Check if there is a session_id in the URL
    const query = new URLSearchParams(location.search);
    const sessionId = query.get('session_id');
    if (sessionId) {
      setActiveStep(5); // Set the active step to 5 (Confirmation) if session_id is present
    }
  }, [location.search]);

  const [stepCompleted, setStepCompleted] = useState(false);

  useEffect(() => {
    // Check if data required for current step is filled out
    switch (activeStep) {
      case 0:
        setStepCompleted(!!selectedAgent.MARN);
        break;
      case 1:
        setStepCompleted(!!selectedService.id );
        break;
      case 2:
        setStepCompleted(selectedTime !== null);
        break;
      case 3:
        setStepCompleted(formData.firstName !== '' && formData.lastName !== '' && formData.email !== '' && formData.phoneNumber !== '');
        break;
        case 4:
        setStepCompleted(!!selectedAgent.MARN);
        case 5:
          setStepCompleted(true);
        break;
      default:
        setStepCompleted(false);
        break;
    }
  }, [activeStep, selectedAgent, selectedService, selectedTime, formData]);

  const handleNext = () => {
    if (stepCompleted) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setIncompleteMsg(false);
    } else {
      setIncompleteMsg(true);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepComponent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <MigrationAgent setActiveStep={setActiveStep} selectedAgent={selectedAgent} 
        setSelectedAgent={setSelectedAgent} setIncompleteMsg={setIncompleteMsg} />;
      case 1:
        return <Service setActiveStep={setActiveStep} selectedService={selectedService}
         setSelectedService={setSelectedService} setIncompleteMsg={setIncompleteMsg} />;
      case 2:
        return <DateAndTime setActiveStep={setActiveStep} selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} selectedAgent={selectedAgent} setSelectedTime={setSelectedTime} 
        setIncompleteMsg={setIncompleteMsg}
        />;
      case 3:
        return <Information setActiveStep={setActiveStep} formData={formData} setFormData={setFormData}
        setIncompleteMsg={setIncompleteMsg}
        />;
      case 4:
        return <Cart setActiveStep={setActiveStep} selectedService={selectedService} 
        
        selectedAgent={selectedAgent} selectedDate ={selectedDate} formData={formData} selectedTime={selectedTime}/>;
      case 5:
        return <Confirmation setActiveStep={setActiveStep} />;
      default:
        return null;
    }
  };

  const stepStyleLg = {
    boxShadow: 2,
    backgroundColor: '#001f80',
      p:4,
      height:'80vh',
      display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
    '& .Mui-active': {
      '& .MuiStepLabel-label': {
        color: 'red',
      },
    },
    '& .Mui-completed': {
      '&.MuiStepIcon-root': {
        color: 'red',
      },
      '& .MuiStepConnector-line': {
        borderColor: 'red',
      },
      '& .MuiStepLabel-label': {
        color: 'white',
      },
    },
    '& .MuiStepLabel-label': {
      color: 'grey',
    },
  };
  const stepStyle = {
    boxShadow: 2,
    backgroundColor: 'blue',
      p:2,
      
     
    '& .Mui-active': {
      '& .MuiStepLabel-label': {
        color: 'red',
      },
    },
    '& .Mui-completed': {
      '&.MuiStepIcon-root': {
        color: 'red',
      },
      '& .MuiStepConnector-line': {
        borderColor: 'red',
      },
      '& .MuiStepLabel-label': {
        color: 'white',
      },
    },
    '& .MuiStepLabel-label': {
      color: 'grey',
    },
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Layout>
      
      <h1>Book A Consultation</h1>
        <p>
          Book an online consultation via Zoom meeting. Appointment times are displayed in Australia/Brisbane time
          (AEST). After booking, you will get an email with the booking details and a link to fill a short
          questionnaire. The fee for online consultations is $250 AUD (payment processing fees included).
        </p>

     
      <Container >
       
        <Box sx={{ width: '100%', display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
          <Box sx={{ flexDirection: 'row', display: 'flex' }}>
            <Box>
              <Stepper activeStep={activeStep} orientation="vertical" sx={stepStyleLg}>
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepButton onClick={() => setActiveStep(index)}>
                      {activeStep === index ? (
                        <div style={{ color: 'red' }}>{label}</div>
                      ) : (
                        label
                      )}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box sx={{ height: '80vh', overflowY: 'auto', width: '80%', backgroundColor: 'white', '&::-webkit-scrollbar':
             { display: 'none' } }}>
              {renderStepComponent(activeStep)}
            </Box>
          </Box>
          {activeStep === steps.length ? (
            <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-evenly' }}>
            
              <Button onClick={handleReset} variant="contained" sx={{ backgroundColor: '#cb0731', color: 'white' }}>Reset</Button>
            </Box>
          </React.Fragment>
          ) : (
            <React.Fragment>
              {incompleteMsg && (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 4 }}>
                    <Typography variant="h6" sx={{ color: 'red' }}>
                      * Please complete the current step before proceeding.
                    </Typography>
                  </Box>
                </Box>
              )}
             
             {activeStep===4?null:
             activeStep===5?
             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-evenly' }}>
           
             <Button onClick={handleNext} variant="contained" sx={{ backgroundColor: '#cb0731', color: 'white' }}>
               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
             </Button>
           </Box>:
               <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-evenly' }}>
               <Button variant="contained" color="primary" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 25 }}>
                 Back
               </Button>
               <Button onClick={handleNext} variant="contained" sx={{ backgroundColor: '#cb0731', color: 'white' }}>
                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
               </Button>
             </Box>

             
             }
         </React.Fragment>
          )}
        </Box>

        <Box sx={{ width: '100%', display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}>
          <Box>
            <Box>
              <Stepper activeStep={activeStep} sx={stepStyle}>
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepButton onClick={() => setActiveStep(index)} />
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box sx={{ width: '100%' }}>{renderStepComponent(activeStep)}</Box>
          </Box>
          {activeStep === steps.length ? (
              <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-evenly' }}>
              
                <Button onClick={handleReset} variant="contained" sx={{ backgroundColor: '#cb0731', color: 'white' }}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {incompleteMsg && (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 4 }}>
                    <Typography variant="h6" sx={{ color: 'red' }}>
                      * Please complete the current step before proceeding.
                    </Typography>
                  </Box>
                </Box>
              )}
             {activeStep===4?null:
             activeStep===5?

             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-between' }}>
           
             <Button onClick={handleNext} sx={{ backgroundColor: '#cb0731', color: 'white' }}>
               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
             </Button>
           </Box>:
               <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-between' }}>
               <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                 Back
               </Button>
               <Button onClick={handleNext} sx={{ backgroundColor: '#cb0731', color: 'white' }}>
                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
               </Button>
             </Box>
             
             }



            </React.Fragment>
          )}
        </Box>
      </Container>

    </Layout>
  );
}
