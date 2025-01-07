import footerLogo1 from "../Assets/Asset white 20@4x.png";
import { listForFooter } from "../data";

export default function Footer() {
  return (
    <footer className="footer-container">
      <section className="footer-inner-main-container">
        <img src={footerLogo1} alt="footer Logo" />
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
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            {item}
                          </a>
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
                            <img src={el.icon} alt="el.title" />
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
                          <a
                            className="social-media"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img src={el.icon} alt="Social Media Link" />
                          </a>
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

{
  /* return (
    <footer className="footer-container">
      <section className="footer-inner-main-container">
        <img src={footerLogo1} alt="footer Logo" />
        {listForFooter.map((section, index) => {
          return (
            <section key={section.id} className={`footer-section`}>
              <ul>
                {section.listItems.map((listItem, index) => {
                  if (index === 0) {
                    return (
                      <li key={index}>
                        <b>{listItem}</b>
                      </li>
                    );
                  } else {
                    return (
                      <li key={index}>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                         {listItem}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </section>
          );
        })}
      </section>
    </footer>
  );
} */
}
