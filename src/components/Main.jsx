import Specials from "./Specials";
import Homepage from "./Homepage ";
import CustomerSay from "./CustomerSay";
import Chicago from "./Chicago";
import { listForMain } from "../data";

export default function Main({ children }) {
  return (
    <main className="main-container">
      <div className="homepage-main-container">
        <Homepage />
      </div>
      <Specials />
      <div className="customersay-main-container">
        <CustomerSay />
      </div>
      {/* <Chicago /> */}
      {children}
    </main>
  );
}
