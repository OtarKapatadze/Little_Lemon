import { SpeacialsData } from "../data";

export default function Specials() {
  return (
    <section className="Highlights-section">
      <header className="highlights-header">
        <h2>This week specials!</h2>
        <button>Online Menu</button>
      </header>
      <main className="highlights-main">
        {SpeacialsData.map((el) => {
          return (
            <div key={el.id} className="dish-card">
              <img src={el.image} alt={el.title} />
              <div className="title-price">
                <h3>{el.title}</h3>
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
      </main>
    </section>
  );
}
