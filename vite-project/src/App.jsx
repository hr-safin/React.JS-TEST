// App.js
import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from 'axios';
import ShowList from './Components/ShowLists/ShowList';
import ShowDetail from './Components/ShowDetails/ShowDetails';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const router = new createBrowserRouter([
    {
      path : "/",
      element : <ShowList shows={shows} />
    },
    {
      path : "/show/:id",
      element :<ShowDetail />
    }
  ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
