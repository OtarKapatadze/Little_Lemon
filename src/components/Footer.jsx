import footerLogo1 from "../Assets/Asset white 20@4x.png";
import { Link } from "react-router-dom";
import { listForFooter } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling effect
    });
  };

  return (
    <footer className="footer-container">
      <section className="footer-inner-main-container">
        <img src={footerLogo1} alt="footer Logo" loading="lazy" />
        {listForFooter.map((sec, index) => {
          if (index === 0) {
            return (
              <section key={sec.id} className="footer-section">
                <ul>
                  {sec.listItems.map((item, inx) => {
                    if (inx === 0) {
                      return <li key={inx}>{item}</li>;
                    } else {
                      return (
                        <li key={inx}>
                          <Link
                            to={item === "Home" ? "/" : `/${item}`}
                            onClick={handleScrollToTop}
                            className="link"
                          >
                            {item}
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </section>
            );
          } else if (index === 1) {
            return (
              <section key={sec.id} className="footer-section">
                <ul>
                  {sec.listItems.map((el, inx) => {
                    if (inx === 0) {
                      return <li key={inx}>{el.title}</li>;
                    } else {
                      return (
                        <li key={inx}>
                          <a
                            className="contact-us"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img src={el.icon} alt="contact info" />
                            <span className="span-box">{el.content}</span>
                          </a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </section>
            );
          } else {
            return (
              <section key={sec.id} className="footer-section">
                <ul>
                  {sec.listItems.map((el, inx) => {
                    if (inx === 0) {
                      return <li key={inx}>{el.title}</li>;
                    } else {
                      return (
                        <li key={inx}>
                          <Link
                            className="social-media"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(`${el.link}`, "_blank");
                            }}
                          >
                            <img src={el.icon} alt="Social Media Link" />
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </section>
            );
          }
        })}
      </section>
    </footer>
  );
}
