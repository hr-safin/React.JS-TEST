// ShowList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShowList = ({ shows }) => {
  return (
    <>
      <h3 className='text-center p-5'>Show Lists</h3>
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row className=' g-5'>
          {shows.map((show) => (
            <Col key={show.show.id} xs={12} sm={6} md={4} lg={4}>
              <Card style={{ width: '22rem' }} className="mb-3">
                {show.show.image && <Card.Img className=' object-fit' height={350} variant="top" src={show.show.image.medium} alt={show.show.name} />}
                <Card.Body>
                  <Card.Title>{show.show.name}</Card.Title>
                  <Card.Text>
                    <strong>Type:</strong> {show.show.type}
                  </Card.Text>
                  <Card.Text>
                    <strong>Language:</strong> {show.show.language}
                  </Card.Text>
                  <Card.Text>
                    <strong>Runtime:</strong> {show.show.runtime} minutes
                  </Card.Text>
                  <Link to={`/show/${show.show.id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ShowList;
