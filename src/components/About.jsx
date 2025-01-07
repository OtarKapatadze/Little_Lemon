export default function About({ children, title = "About page" }) {
  return (
    <section className="router-section router-about">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
