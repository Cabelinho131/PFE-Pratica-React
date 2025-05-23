import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import "./app.css";
import "./index.css";


export default function App() {
  return (
    <div id="app">
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/sobre" className="link">
          Sobre
        </Link>
        <Link to="/contato" className="link">
          Contato
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  );
}
