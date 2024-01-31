import React, { useEffect, useState } from 'react';
import axios from "axios"
import "./App.css"
import ShowDetails from './Components/ShowDetails/ShowDetails';
import ShowList from './Components/ShowLists/ShowList';
import TicketForm from './Components/TicketForm/TicketForm';
const App = () => {
  const [shows, setShows] = useState([])
  const [selectShow, setSelectShow] = useState(null)
  const [bookingData, setBookingData] = useState(null)

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all")
    .then(res => {
      setShows(res.data)
      console.log(res.data)
    })
    .catch((error) => console.log(error))
  }, [])

  const handleShow = (show) => {
    setSelectShow(show)
  }

  const handleBookShow = (show) => {
    setSelectShow(null)
    setBookingData(show)
  }

  const handleTicketSubmit = (userData) => {
    setBookingData(null)
    console.log("Ticket Booked", {...bookingData, userData})
  }
  return (
    <div className='app'>
      {selectShow && <ShowDetails show={selectShow.show} onBookingTicket={handleBookShow} />}

      {!selectShow && !bookingData && <ShowList show={shows} onShowClick={handleShow} />}

      {bookingData && <TicketForm show={bookingData} onSubmit={handleTicketSubmit} />}
      ss
    </div>
  );
};

export default App;