import React from "react";
import "../css/Error.css";

function Error() {
  return (
    <section className="error-page">
      <div className="error-container">
        <h1 className="error-404">404</h1>
        <h2 className="error-message">¡Ups! Esta clase se fue a otra U 🎓</h2>
        <p className="error-sub">
          La página que buscas no está en nuestro campus digital. 
          
        </p>
        <a href="/" className="error-btn">Volver al portal principal</a>
      </div>
    </section>
  );
}

export default Error;
