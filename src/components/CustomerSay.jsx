import { testimonialsData } from "../data";

export default function CustomerSay() {
  return (
    <section className="testimonials-container">
      <header className="testimonials-header">
        <h2>Testimonials</h2>
      </header>
      <main className="testimonials-main">
        {testimonialsData.map((el) => {
          return (
            <div key={el.id} className="testimonial-card">
              <img
                src={el.image}
                alt={`Picture of-${el.name}`}
                loading="lazy"
              />
              <h3>{el.name}</h3>
              <div className="testimonial-rating">
                <p>⭐⭐⭐⭐⭐</p>
                <p>{`${el.rating}/5`}</p>
              </div>
              <p>"{el.description}"</p>
            </div>
          );
        })}
      </main>
    </section>
  );
}
