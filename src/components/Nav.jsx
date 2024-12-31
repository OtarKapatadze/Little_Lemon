import logo from "../Assets/Logo.jpg";
import hamburgerSvg from "../Assets/🦆 icon _hamburger menu.svg";
import xmark from "../Assets/closeX.svg";
// import xmark from "../Assets/Xicon.png";

import { useState, useEffect } from "react";
const listItems = ["Home", "About", "Services", "Contact", "Login"];

export default function Nav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  // listening to  window width for changing element
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle Humburger menu
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navbarItems = (
    <ul className="navbar-links navbar-item">
      {listItems.map((el, index) => {
        return (
          <li className={`list-Item-${index + 1}`} key={index}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {el}
            </a>
          </li>
        );
      })}
    </ul>
  );

  const humburgerMenu = (
    <>
      <button className="hamburger" onClick={toggleMenu}>
        <img src={menuOpen ? xmark : hamburgerSvg} alt="Hamburger Menu Icon" />
      </button>
      {menuOpen && (
        <ul className={`navbar-links menu ${menuOpen ? "open" : ""}`}>
          {listItems.map((el, index) => {
            return (
              <li className={`list-Item-${index + 1}`} key={index}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {el}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );

  return (
    <nav className="navbar-container">
      <img className="navbar-item" src={logo} alt="Company Logo" />
      {windowWidth >= 1024 ? navbarItems : humburgerMenu}
    </nav>
  );
}
