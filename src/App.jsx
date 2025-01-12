import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Menu from "./components/Menu";
import BookingPage from "./components/BookingPage ";
import About from "./components/About";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header>
          <Nav />
        </Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Menu" element={<Menu title="Menu Coming Soon" />} />
          <Route
            path="/About"
            element={<About title="About Page Coming Soon" />}
          />
          <Route path="/Reservation" element={<BookingPage />} />
          <Route
            path="/Order Online"
            element={<OrderOnline title="Online Orders Coming Soon" />}
          />
          <Route
            path="/Login"
            element={<Login title="Login Functionality Coming Soon" />}
          />
          <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
