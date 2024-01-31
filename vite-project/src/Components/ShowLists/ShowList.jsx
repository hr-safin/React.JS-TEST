import React from 'react';

const ShowList = ({show, onShowClick}) => {
    return (
        <div className="show-list">
        <h2>Show List</h2>
        <ul>
          {shows.map((show) => (
            <li key={show.show.id}>
              <img src={show.show.image?.medium} alt={show.show.name} />
              <div>
                <h3>{show.show.name}</h3>
                <p>Type: {show.show.type}</p>
                <button onClick={() => onShowClick(show.show)}>View Details</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default ShowList;