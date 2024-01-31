// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'; // Add your own styles or use Bootstrap
import ShowDetails from './Components/ShowDetails/ShowDetails';
import ShowList from './Components/ShowLists/ShowList';
import TicketForm from './Components/TicketForm/TicketForm';

const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    // Fetch shows from the API
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => setShows(response.data))
      .catch((error) => console.error('Error fetching shows:', error));
  }, []);

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const handleBookTicket = (show) => {
    setSelectedShow(null);
    setBookingData(show);
  };

  const handleTicketSubmit = (userData) => {
    // Perform ticket booking logic here
    console.log('Ticket booked:', { ...bookingData, userData });
    setBookingData(null);
  };

  return (
    <div className="app">
      {selectedShow && <ShowDetails show={selectedShow.show} onBookTicket={handleBookTicket} />}
      {!selectedShow && !bookingData && <ShowList shows={shows} onShowClick={handleShowClick} />}
      {bookingData && <TicketForm show={bookingData} onSubmit={handleTicketSubmit} />}
    </div>
  );
};

export default App;
