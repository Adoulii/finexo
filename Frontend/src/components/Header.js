import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import heroImg from "../assets/images/hero-bg.png"; // Import the image
import HeroSection from "./HeroSection"; // Import HeroSection component

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="header_section"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
            <span>Finexo</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  onClick={() => handleScroll("services")}
                >
                  Services
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  onClick={() => handleScroll("about")}
                >
                  About
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  onClick={() => handleScroll("why-us")}
                >
                  Why Us
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  onClick={() => handleScroll("team")}
                >
                  Team
                </span>
              </li>

              {!user ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <i className="fa fa-user" aria-hidden="true"></i> Login
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <span className="nav-link">Hello, {user.firstName}</span>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </>
              )}
              <form className="form-inline">
                <button
                  className="btn my-2 my-sm-0 nav_search-btn"
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
        <div
          className="hero_content d-flex justify-content-between align-items-center text-left"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            zIndex: 1,
            width: "100%",
          }}
        >
          
        </div>
        <div className="hero-content">
            <HeroSection />
          </div>
      </div>
    </header>
  );
};

export default Header;
