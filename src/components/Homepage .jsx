import { homePageInfo } from "../data";

export default function Homepage() {
  return (
    <section className={homePageInfo.classname}>
      <div className="Hero-description">
        <h2>{homePageInfo.title}</h2>
        <h3>{homePageInfo.location}</h3>
        <p>{homePageInfo.description}</p>
        <button>{homePageInfo.buttonLabel}</button>
      </div>
      <div className="Hero-image">
        <img src={homePageInfo.image} alt={homePageInfo.imageAlt} />
      </div>
    </section>
  );
}
