import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-bs-toggle="dropdown"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/products">
              Products
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;