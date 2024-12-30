import footerLogo from "../Assets/Asset 20@4x.png";
import { listForFooter } from "../data";

export default function Footer() {
  return (
    <footer className="app-Footer">
      <section className="footer-section">
        <img src={footerLogo} alt="Footer Logo" />
      </section>
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
    </footer>
  );
}
