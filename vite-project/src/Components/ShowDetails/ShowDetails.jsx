// ShowDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const fetchShowDetail = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetail();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission and store ticket details in local storage
    const ticketDetails = {
      showName: show.name,
      name: formData.name,
      email: formData.email,
    };
    const bookedTickets = JSON.parse(localStorage.getItem('bookedTickets')) || [];
    bookedTickets.push(ticketDetails);
    localStorage.setItem('bookedTickets', JSON.stringify(bookedTickets));
    console.log('Ticket booked:', ticketDetails);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row>
        <Col xs={12} md={8} lg={6}>
          {show && (
            <div>
              <h1>{show.name}</h1>
              <p>{show.summary}</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label className='mt-2'>Email:</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleChange} />
                </Form.Group>
                <button type="submit" className="btn mt-4 btn-primary">
                  Book Ticket
                </button>
              </Form>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ShowDetail;
