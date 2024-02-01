// ShowDetail.js
import React, { useState } from 'react';

const ShowDetail = ({ match }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    showName: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>Show Details</h1>
      {/* Display show details using match.params.id */}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} />
        <br />
        <label>Show Name:</label>
        <input type="text" name="showName" value={formData.showName} readOnly />
        <br />
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
};

export default ShowDetail;
