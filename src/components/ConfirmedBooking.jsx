import { Link } from "react-router-dom";
export default function ConfirmedBooking({
  children,
  title = "Congrats You Just Booked a Table",
}) {
  return (
    <section className="router-section router-Confirmation">
      <h2>{title}</h2>
      <Link className="linkforhome" to="/">
        Home
      </Link>
      {children}
    </section>
  );
}
