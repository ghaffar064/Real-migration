import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import { Container } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

export default function Service({ setActiveStep, selectedService, setSelectedService, setIncompleteMsg }) {
  const [services, setServices] = useState([]);
  const [expandedService, setExpandedService] = useState(null);
  const [borderColor, setborderColor] = useState("1px solid white")

  useEffect(() => {
    axios.get('./service/allServices')
      .then((resp) => {
        console.log(resp);
        setServices(resp.data.services);
      });
  }, []);

  const handleCardClick = (service) => {
    setActiveStep(2);
    setSelectedService(service);
    setIncompleteMsg(false);
    setborderColor("1px solid #f56c6c")
  };

  const handleExpandClick = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <Container>
      <h1 style={{ position: 'sticky', top: '0', backgroundColor: 'white', zIndex: '1', padding: '10px' }}>
        Select Service
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {services.map((service, index) => (
          <div key={index} style={{ margin: '10px', width: '100%', maxWidth: '800px' }}>
            <Button onClick={() => handleCardClick(service)} style={{ width: '100%', padding: 0, textAlign: 'left' }}>
              <Card style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '20px',
                border: {borderColor},
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
                  <WorkIcon style={{ fontSize: '40px', color: '#f56c6c' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <Card.Title style={{ marginBottom: '10px', fontSize: '20px', fontWeight: 'bold', color: '#f56c6c' }}>
                    {service.VisaType}
                  </Card.Title>
                  <Card.Text style={{ marginBottom: '10px', fontSize: '16px', color: '#f56c6c' }}>
                    {service.TIMELIMIT}
                  </Card.Text>
                  <Card.Text style={{ marginBottom: '10px', fontSize: '16px', color: '#000' }}>
                    {expandedService === index ? service.Details : `${service.Details.substring(0, 100)}...`}
                  </Card.Text>
                  <Button onClick={(e) => { e.stopPropagation(); handleExpandClick(index); }} style={{ padding: '0', color: '#f56c6c', textTransform: 'none' }}>
                    {expandedService === index ? 'Show less' : 'Show more'}
                  </Button>
                </div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f56c6c' }}>
                  ${service.Price}
                </div>
              </Card>
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
}
