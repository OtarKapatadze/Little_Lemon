import footerLogo1 from "../Assets/Asset white 20@4x.png";
import { listForFooter } from "../data";

// // Footer  icons
// import twitterIcon from "../Assets/X-twitter.png";
// import facebookIcon from "../Assets/Facebook.png";
// import instagramIcon from "../Assets/Instagram.png";
// import youtubeIcon from "../Assets/Youtube.png";
// import emailIcon from "../Assets/email.png";
// import phoneIcon from "../Assets/phone.png";
// import pinIcon from "../Assets/pin.png";

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
