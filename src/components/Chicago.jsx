import { chicagoData } from "../data";

export default function Chicago() {
  return (
    <section className="About-section">
      <article className="story-container">
        <h2>{chicagoData.title}</h2>
        <p>{chicagoData.description}</p>
      </article>
      <div className="image-container">
        <img src={chicagoData.image1} alt="owner of Little Lemon restaurant" />
        <img src={chicagoData.image2} alt="owner of Little Lemon restaurant" />
      </div>
    </section>
  );
}
