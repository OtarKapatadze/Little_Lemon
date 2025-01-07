import { homePageInfo } from "../data";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Navigate to the online menu page
    navigate("/reservation");
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling effect
    });
  };

  const twoFunctions = () => {
    handleNavigation();
    handleScrollToTop();
  };

  return (
    <section className={homePageInfo.classname}>
      <div className="hero-description">
        <h1>{homePageInfo.title}</h1>
        <h2>{homePageInfo.location}</h2>
        <p>{homePageInfo.description}</p>
        <button onClick={twoFunctions}>{homePageInfo.buttonLabel}</button>
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
