import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          NSS Volunteer Management System
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link" href="/add">
              Add Volunteer
            </a>
            <a className="nav-link" href="/view">
              View Volunteers
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
