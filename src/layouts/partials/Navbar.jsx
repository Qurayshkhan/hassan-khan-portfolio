import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
        <div className="container px-5">
          <Link className="navbar-brand" to="/">
            <span className="fw-bolder text-primary">Hassan khan</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
              <li className="nav-item">
                <a className="nav-link" href="#home-section">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume-section">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project-section">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-section">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
