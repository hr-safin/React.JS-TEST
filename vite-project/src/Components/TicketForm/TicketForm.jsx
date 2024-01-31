// src/components/TicketForm.js
import React, { useState, useEffect } from 'react';

const TicketForm = ({ show, onSubmit }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    // Fetch user details from local storage if available
    const storedUserData = JSON.parse(localStorage.getItem('userData')) || {};
    setUserData((prevData) => ({ ...prevData, ...storedUserData }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user details to local storage
    localStorage.setItem('userData', JSON.stringify(userData));
    onSubmit({ ...userData, movie: show.name });
  };

  return (
    <div className="ticket-form">
      <h2>Book Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={userData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userData.email} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketForm;
