import logo from "../Assets/Logo.jpg";
import hamburgerSvg from "../Assets/🦆 icon _hamburger menu.svg";
import xmark from "../Assets/closeX.svg";
import { Link } from "react-router-dom";
// import xmark from "../Assets/Xicon.png";

import { useState, useEffect } from "react";
const listItems = [
  "Home",
  "About",
  "Menu",
  "Reservation",
  "Order Online",
  "Login",
];

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
          <li className={`list-item-${index + 1}`} key={index}>
            <Link
              to={el === "Home" ? "/" : el}
              onClick={toggleMenu}
              className="link"
            >
              {el}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  const hamburgerMenu = (
    <>
      <button className="hamburger" onClick={toggleMenu}>
        <img src={menuOpen ? xmark : hamburgerSvg} alt="Hamburger Menu Icon" />
      </button>

      <ul className={` menu ${menuOpen ? "open" : ""}`}>
        {listItems.map((el, index) => {
          return (
            <li className={`list-Item-${index + 1}`} key={index}>
              <Link
                to={el === "Home" ? "/" : el}
                onClick={toggleMenu}
                className="link"
              >
                {el}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );

  return (
    <nav className="navbar-container">
      <Link to={"/"}>
        {" "}
        <img className="navbar-item" src={logo} alt="Company Logo" />
      </Link>
      {windowWidth >= 1025 ? navbarItems : hamburgerMenu}
    </nav>
  );
}
