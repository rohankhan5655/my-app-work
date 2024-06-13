import React, { useState, useEffect } from "react";
import "../components/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.substring(1).toLowerCase()
  );

  useEffect(() => {
    switch (location.pathname) {
      case "/About":
        document.title = "My textUtils App - About";
        break;
      case "/Contact":
        document.title = "My textUtils App - Contact";
        break;
      default:
        document.title = "My textUtils App - Home";
    }
  }, [location.pathname]);

  const handleLinkClick = (linkName) => {
    if (activeLink === linkName) {
      setActiveLink(null); // Remove active link if clicked again
    } else {
      setActiveLink(linkName);
    }
  };

  const handleMouseEnter = (linkName) => {
    if (!activeLink) {
      setActiveLink(linkName); // Set active link on hover if no link is active
    }
  };

  const handleMouseLeave = () => {
    if (!activeLink) {
      setActiveLink(null); // Remove active link on mouse leave if no link is active
    }
  };

  return (
    <nav>
      <Link
        to="/"
        className={`start-home ${activeLink === "home" ? "active" : ""}`}
        onClick={() => handleLinkClick("home")}
        onMouseEnter={() => handleMouseEnter("home")}
        onMouseLeave={() => handleMouseLeave()}
      >
        Home
      </Link>
      <Link
        to="/About"
        className={`start-about ${activeLink === "about" ? "active" : ""}`}
        onClick={() => handleLinkClick("about")}
        onMouseEnter={() => handleMouseEnter("about")}
        onMouseLeave={() => handleMouseLeave()}
      >
        About
      </Link>
      <Link
        to="/Contact"
        className={`start-contact ${activeLink === "contact" ? "active" : ""}`}
        onClick={() => handleLinkClick("contact")}
        onMouseEnter={() => handleMouseEnter("contact")}
        onMouseLeave={() => handleMouseLeave()}
      >
        Contact
      </Link>
      <div className="animation start-home"></div>
    </nav>
  );
}

export default Navbar;
