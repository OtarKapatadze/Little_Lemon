import { SpeacialsData } from "../data";

export default function Specials() {
  return (
    <section className="Highlights-section">
      {SpeacialsData.map((el) => {
        return (
          <div key={el.id} className="dish-card">
            <img src={el.image} alt={el.title} />
            <div className="title-price">
              <h2>{el.title}</h2>
              <p>{el.price}</p>
            </div>
            <p>{el.description}</p>
            <div className="delivery-part">
              <p>{el.orderText}</p>
              <img src={el.icon} alt="Delivery Icon" />
            </div>
          </div>
        );
      })}
    </section>
  );
}
