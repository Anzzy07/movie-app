import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import Logo from "../assets/logo.jpg";
import "../css/Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("guest_session_id") !== null;

  const logout = () => {
    localStorage.removeItem("guest_session_id");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/search" className="search-link">
          <IoSearch className="search-icon" />
        </Link>
        <Link to="/favorites" className="nav-link">
          Watchlist
        </Link>
        {isLoggedIn ? (
          <button onClick={logout} className="nav-link logout-button">
            Logout
          </button>
        ) : (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};
