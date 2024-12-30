import logo from "../Assets/Logo.jpg";

const listItems = ["Home", "About", "Services", "Contact", "Login"];

export default function Nav() {
  return (
    <nav className="navbar-container">
      <img className="navbar-item" src={logo} alt="Company Logo" />
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
    </nav>
  );
}

// what it could be without Reacty approach
{
  /* <div class="navbar-container">
  <img src={logo} alt="" />
  <ul class="navbar-links">
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        About
      </a>
    </li>
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Services
      </a>
    </li>
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Contact
      </a>
    </li>
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
        }}
        class="login-button"
      >
        Login
      </a>
    </li>
  </ul>
</div>; */
}
