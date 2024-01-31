// src/components/ShowDetails.js
import React from 'react';

const ShowDetails = ({ show, onBookTicket }) => {
    console.log(show)
  return (
    <div className="show-details">
      <h2>Show Details</h2>
      <img src={show?.image?.medium} alt={show?.name} />
      <h3>{show?.name}</h3>
      <p>Type: {show?.type}</p>
      <p>Summary: {show?.summary}</p>
      <button onClick={() => onBookTicket(show)}>Book Ticket</button>
    </div>
  );
};

export default ShowDetails;
