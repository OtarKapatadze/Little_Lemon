import { homePageInfo } from "../data";

export default function Homepage() {
  return (
    <section className={homePageInfo.classname}>
      <div className="hero-description">
        <h1>{homePageInfo.title}</h1>
        <h2>{homePageInfo.location}</h2>
        <p>{homePageInfo.description}</p>
        <button>{homePageInfo.buttonLabel}</button>
      </div>
      <img
        className="hero-image"
        src={homePageInfo.image}
        alt={homePageInfo.imageAlt}
        loading="lazy"
      />
    </section>
  );
}
