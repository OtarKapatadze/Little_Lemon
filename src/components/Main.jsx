import { listForMain } from "../data";
import Homepage from "./Homepage ";

export default function Main({ children }) {
  return (
    <main className="app-Main">
      {listForMain.map((dataSection) => {
        return (
          <section key={dataSection.id} className={dataSection.className}>
            {dataSection.listItems}
          </section>
        );
      })}
      {children}
    </main>
  );
}
