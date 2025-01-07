import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header>
          <Nav />
        </Header>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
