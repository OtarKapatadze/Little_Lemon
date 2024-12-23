import footerLogo from "../Assets/Asset 20@4x.png";

export default function Footer() {
  return (
    <footer>
      <section>
        <img src={footerLogo} alt="" />
      </section>
      <section>
        <ul>
          <li>
            <b>Doormat Navigation</b>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservation</a>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <b>Contact</b>
          </li>
          <li>
            <a href="">Address</a>
          </li>
          <li>
            <a href="">Phone number</a>
          </li>
          <li>
            <a href="">email</a>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <b>Social Media Links</b>
          </li>
          <li>
            <a href="">Address</a>
          </li>
          <li>
            <a href="">Phone number</a>
          </li>
          <li>
            <a href="">email</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
