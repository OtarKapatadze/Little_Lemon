export default function Menu({ children, title = "Menu Page" }) {
  return (
    <section className="router-section router-menu">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
