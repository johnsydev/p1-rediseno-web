import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal.jsx";
import Admision from "./pages/Admision.jsx";
import Error from './pages/Error.jsx'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/admision" element={<Admision />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}