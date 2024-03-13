import React, { useState } from "react";
import "../styles/Navbar.css";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState(null);
  const [clicked, setClicked] = useState(false)

  function changeBar(){
    setClicked(!clicked)
  }

  const handleClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link);
  };

  const navStyle = {
    fontFamily: "Roboto, sans-serif", // Change this to your preferred Google Font
  };

  return (
    <>
      <nav>
        <div id="logo">
          <a href="/">
            {" "}
            <svg
              id="logo-35"
              width="50"
              height="39"
              viewBox="0 0 50 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                class="ccompli1"
                fill="#007AFF"
              ></path>{" "}
              <path
                d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                class="ccustom"
                fill="#312ECB"
              ></path>{" "}
            </svg>
          </a>
          <h4>Zera</h4>
        </div>
        <div  >
          <ul id="nav" className={clicked?" #nav show":"#nav"}>
            <li>
              <i className="fa-solid fa-house"></i>
              <a
                href="/home"
                className={activeLink === "Home" ? "active" : ""}
                onClick={(e) => handleClick(e, "Home")}
              >
                Home
              </a>
            </li>
            <li>
                <i className="fa-brands fa-servicestack"></i>
              <a
                href="/services"
                className={activeLink === "Services" ? "active" : ""}
                onClick={(e) => handleClick(e, "Services")}
              >
                Services
              </a>
            </li>
            <li>
                <i className="fa-solid fa-laptop"></i>
              <a
                href="/projects"
                className={activeLink === "Projects" ? "active" : ""}
                onClick={(e) => handleClick(e, "Projects")}
              >
                Projects
              </a>
            </li>
            <li>
                <i className="fa-solid fa-face-smile"></i>
              <a
                href="/about"
                className={activeLink === "About Me" ? "active" : ""}
                onClick={(e) => handleClick(e, "About Me")}
              >
                About 
              </a>
            </li>
            <li>
                <i className="fa-solid fa-envelope"></i>
              <a
                href="/contact"
                className={activeLink === "Contact Me" ? "active" : ""}
                onClick={(e) => handleClick(e, "Contact Me")}
              >
                Contact 
              </a>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={changeBar}>
          <i id="bar"
            className={clicked? "fas fa-times": "fas fa-bars"}
          ></i>
        </div>
      </nav>
    </>
  );
}
