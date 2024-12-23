import logo from "../Assets/Logo.jpg";

export default function Nav() {
  return (
    <nav>
      <div class="navbar-container">
        <img src={logo} alt="" />
        <ul class="navbar-links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="" class="login-button">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
