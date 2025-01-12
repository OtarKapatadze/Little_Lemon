export default function ConfirmedBooking({
  children,
  title = "Congrats You Just Booked a Table",
}) {
  return (
    <section className="router-section router-about">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
