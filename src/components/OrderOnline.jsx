export default function OrderOnline({ children, title = "Order Online" }) {
  return (
    <section className="router-section router-about">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
