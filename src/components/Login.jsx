export default function Login({ children, title = "Login Page" }) {
  return (
    <section className="router-section router-about">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
