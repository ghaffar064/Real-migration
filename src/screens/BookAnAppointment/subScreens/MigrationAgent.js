import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import { Container } from '@mui/material';

export default function MigrationAgent({ setActiveStep, selectedAgent, setSelectedAgent, setIncompleteMsg }) {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios.get('./agent/allAgents')
      .then((resp) => {
        console.log(resp.data.agents);
        setAgents(resp.data.agents);
      });
  }, []);

  const handleCardClick = (agent) => {
    setActiveStep(1);
    setSelectedAgent(agent);
    setIncompleteMsg(false);
  };

  return (
    <Container>
      <h1 style={{ position: 'sticky', top: '0', backgroundColor: 'white', zIndex: '1', padding: '10px' }}>
        Select Migration Agent
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {agents.map((agent, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <Button
              onClick={() => handleCardClick(agent)}
              style={{ width: '100%', padding: 0, textAlign: 'left', backgroundColor: 'transparent', border: 'none' }}
            >
              <Card style={{
                width: '270px',
                height: 'auto',
                border: '1px solid #f56c6c',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
              }}>
                <Card.Body>
                  {agent.fileName && (
                    <img
                      src={process.env.PUBLIC_URL + `/uploads/${agent.fileName}`}
                      alt={agent.agentName}
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginBottom: '10px'
                      }}
                    />
                  )}
                  <Card.Title style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                    {agent.agentName}
                  </Card.Title>
                  <Card.Text style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
                    MARN {agent.MARN}
                  </Card.Text>
                  <Card.Text style={{ fontSize: '14px', color: '#666' }}>
                    Languages spoken: {agent.languagesSpoken}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
}
