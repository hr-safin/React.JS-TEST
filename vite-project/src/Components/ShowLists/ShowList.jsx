// ShowList.js
import React from "react";
import { Link } from "react-router-dom";

const ShowList = ({ shows }) => {
  return (
    <div>
      <h2 className=" text-center p-5">Show List</h2>
      <div className="row row-cols-3   row-cols-md-3 g-4">
        {shows.map((show) => (
          <div key={show.show.id} className="col">
            {show.show.image && (
              <img className="" src={show.show.image?.medium} alt={show.show.name} />
            )}
            <div className="card-body">
              <h4>{show.show.name}</h4>
              <Link to={`/show/${show.show.id}`}>
                <button type="button" className="btn btn-primary">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
