import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar  px-5 py-3 shadow-md navbar-expand-lg navbar-light bg-body-tertiary">
  <div className="container-fluid">
    <h3>Cineplex</h3>
    <button
      data-mdb-collapse-init
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item pr-4">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Show</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  );
};

export default NavBar;
