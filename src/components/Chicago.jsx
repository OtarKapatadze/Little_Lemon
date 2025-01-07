import { chicagoData } from "../data";

export default function Chicago() {
  return (
    <section className="about-container">
      <article className="story-container">
        <h2>{chicagoData.title}</h2>
        <p>{chicagoData.description}</p>
      </article>
      <div className="image-container">
        <img
          src={chicagoData.image1}
          alt="owner of Little Lemon restaurant"
          loading="lazy"
        />
        <img
          src={chicagoData.image2}
          alt="owner of Little Lemon restaurant"
          loading="lazy"
        />
      </div>
    </section>
  );
}
