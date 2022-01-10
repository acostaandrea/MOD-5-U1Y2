//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/Home";
import ContactoPage from "./pages/Contacto";
import NosotrosPage from "./pages/Nosotros";
import NovedadesPage from "./pages/Novedades";


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Nav />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/nosotros" exact element={<NosotrosPage />} />
          <Route path="/novedades" exact element={<NovedadesPage />} />
          <Route path="/contacto" exact element={<ContactoPage />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
