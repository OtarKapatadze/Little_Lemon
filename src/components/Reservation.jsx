export default function Reservation({ children, title = "Reservation page" }) {
  return (
    <section className="router-section router-reservation">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
