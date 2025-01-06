import { SpeacialsData } from "../data";

export default function Specials() {
  return (
    <section className="specials-container">
      <header className="specials-header">
        <h2>This week specials!</h2>
        <button>Online Menu</button>
      </header>
      <main className="specials-main">
        {SpeacialsData.map((el) => {
          return (
            <div key={el.id} className="specials-card">
              <img src={el.image} alt={el.title} />
              <div className="dish-card-title">
                <h3>{el.title}</h3>
                <p>{el.price}</p>
              </div>
              <p>{el.description}</p>
              <div className="dish-card-footer">
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
