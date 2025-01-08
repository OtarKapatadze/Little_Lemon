import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import About from "./components/About";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header>
          <Nav />
        </Header>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            exact
            path="/Menu"
            element={<Menu title="Menu Coming Soon" />}
          />
          <Route
            exact
            path="/About"
            element={<About title="About Page Coming Soon" />}
          />
          <Route exact path="/Reservation" element={<Reservation />} />
          <Route
            exact
            path="/Order Online"
            element={<OrderOnline title="Online Orders Coming Soon" />}
          />
          <Route
            exact
            path="/Login"
            element={<Login title="Login Functionality Coming Soon" />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
