import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// Lazy load the components
// import Main from "./components/Main";
// import Menu from "./components/Menu";
// import BookingPage from "./components/BookingPage ";
// import About from "./components/About";
// import OrderOnline from "./components/OrderOnline";
// import Login from "./components/Login";

const Main = lazy(() => import("./components/Main"));
const Menu = lazy(() => import("./components/Menu"));
const About = lazy(() => import("./components/About"));
const BookingPage = lazy(() => import("./components/BookingPage "));
const OrderOnline = lazy(() => import("./components/OrderOnline"));
const Login = lazy(() => import("./components/Login"));

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header>
          <Nav />
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
