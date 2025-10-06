import React, { useState } from "react";
import { FaUser, FaLock, FaArrowLeft, FaTimesCircle } from "react-icons/fa";
import "../css/Matricula.css";
import { Link } from "react-router-dom";

function Matricula() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [errorGlobal, setErrorGlobal] = useState("");

  const validarFormulario = (e) => {
    e.preventDefault();

    if (!usuario.trim()) {
      setErrorGlobal("El usuario es obligatorio.");
      return;
    }
    if (usuario.length < 4) {
      setErrorGlobal("El usuario debe tener al menos 4 caracteres.");
      return;
    }
    if (!password.trim()) {
      setErrorGlobal("La contraseña es obligatoria.");
      return;
    }
    if (password.length < 6) {
      setErrorGlobal("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setErrorGlobal(""); // limpia si no hay errores
    alert("Formulario válido 🚀");
  };

  return (
    <div className="matricula">
      <section className="matricula-page">
        <div className="matricula-container">
          <Link to="/" className="btn-back">
            <FaArrowLeft /> <span className="back-text">Volver al Inicio</span>
          </Link>

          <a href="/" className="logo2">
            <img
              src="/src/assets/logo-usanjose2.png"
              className="logo-img2"
              alt="Logo Universidad San José"
            />
          </a>

          <h2 className="portal-title">Portal de estudiantes</h2>

          <form onSubmit={validarFormulario}>
            {errorGlobal && (
              <div className="merror-message">
                <div className="merror-text">{errorGlobal}</div>
                <div className="merror-close">
                  <FaTimesCircle onClick={() => setErrorGlobal("")} />
                </div>
              </div>
            )}


            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="forgot-password">¿Olvidaste tu contraseña?</div>

            <button type="submit" className="btn-login">
              Entrar
            </button>
          </form>

          {/* Login Microsoft */}
          <form
            action="https://login.microsoftonline.com/601abcfe-55c6-417b-9e01-57754c5ea156/oauth2/v2.0/authorize"
            method="GET"
          >
            <input
              name="client_id"
              value="62a01f6f-cfb6-44e1-a38e-6c79b5b3e45a"
              type="hidden"
            />
            <input name="response_type" value="code" type="hidden" />
            <input name="scope" value="openid" type="hidden" />
            <input
              name="redirect_uri"
              value="https://usj.acamsys.com/microsoft-integration/student/login"
              type="hidden"
            />
            <button type="submit" className="btn-microsoft">
              <img src="/src/assets/logo-microsoft.png" alt="Microsoft" />
              Iniciar sesión con Microsoft
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Matricula;