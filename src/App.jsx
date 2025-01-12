import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const routerOptions = {
  future: {
    v7_startTransition: true, // Enable the future flag
  },
};
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import Main from "./components/Main";
import Menu from "./components/Menu";
import BookingPage from "./components/BookingPage ";
import About from "./components/About";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";

function App() {
  return (
    <Router future={routerOptions}>
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
          <Route exact path="/Reservation" element={<BookingPage />} />
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
