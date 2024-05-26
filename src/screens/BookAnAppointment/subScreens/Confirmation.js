import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Confirmation = ({setActiveStep}) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const sessionId = query.get('session_id');

    useEffect(() => {
        if (sessionId) {
            // Using an Immediately Invoked Function Expression (IIFE) to ensure the function is called only once
            (async () => {
                try {
                    const response = await axios.post('/booking/confirm', { sessionId });
                    if (response.data.success) {
                        console.log('Booking created successfully');
                        setActiveStep(5)
                    } else {
                        console.error('Error creating booking:', response.data.msg);
                    }
                } catch (error) {
                    console.error('Error confirming booking:', error);
                }
            })();
        }
    }, [sessionId]);

    return (
        <div>
            <h1>Payment Successful</h1>
            <p>Thank you for your payment. Your booking is being processed.</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <p>Go to homepage?</p>
                <Link to='/' style={{textDecoration: 'none', color: 'red'}}>Home</Link>
            </div>
        </div>
    );
};

export default Confirmation;
