import footerLogo1 from "../Assets/Asset white 20@4x.png";
import { listForFooter, iconsForFooter } from "../data";

export default function Footer() {
  return (
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
                          {/* <img src={listItem.logo} alt={listItem} /> */}
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
}
