import React from "react";

const ShowDetails = ({ show, onBookingTicket }) => {
  return (
    <div className="show-details">
      <h2>Show Details</h2>
      <div className="card" style="width: 18rem;">
        <img src={show.img?.medium} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{show.name}</h5>
          <p className="card-text">
            Type : {show.type}
          </p>
          <p className="card-text">
            Summary : {show.summary}
          </p>
          
          <button onClick={()=> onBookingTicket(show)} className="btn btn-primary">
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
