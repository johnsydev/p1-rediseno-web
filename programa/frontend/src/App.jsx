import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Principal from "./pages/Principal.jsx";
import Admision from "./pages/Admision.jsx";
import InfoU from "./pages/InfoU.jsx";
import Matricula from './pages/Matricula.jsx';
import Error from './pages/Error.jsx';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/estudiantes/matricula"];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
        {!hideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/admision" element={<Admision />} />
          <Route path="/sobreNosotros" element={<InfoU />} />
          <Route path="/estudiantes/matricula" element={<Matricula />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </>
  );
}