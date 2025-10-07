import { useState } from "react";
import "../css/InfoU.css";
import bannerImage from "../assets/fotoU.png";

function InfoU() {
  const [showFullHistory, setShowFullHistory] = useState(false);

  return (
    <div className="infou-page">
      {/* Banner superior */}
      <section
        className="about-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="about-banner-overlay" />
        <div className="about-text-container">
          <h1 className="about-title">Acerca de Nosotros</h1>
          <p className="about-description">
            Somos la Universidad de San José, una institución de educación superior con 
            más de tres décadas de historia. Somos la Universidad de San José, una institución 
            de educación superior con más de tres décadas de historia. Formamos profesionales 
            íntegros, críticos y creativos, comprometidos con el desarrollo de Costa Rica. 
            Creemos en la excelencia académica, la investigación y la responsabilidad social 
            como motor de transformación.
          </p>
        </div>
      </section>

      <section className="identity-section" aria-labelledby="identidad-titulo">
        <div className="identity-container">
          <h2 id="identidad-titulo" className="identity-title">Nuestra Identidad</h2>
          <p className="identity-intro">
            Lo que nos guía hoy y hacia el futuro: una visión clara y una misión con propósito.
          </p>

          <div className="principle-grid">
            <article className="principle-card principle-v2" aria-labelledby="vision-titulo">
              <header className="principle-header v2">
                <span className="principle-badge navy" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" role="img">
                    <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" fill="currentColor"/>
                  </svg>
                </span>
                <h3 id="vision-titulo" className="principle-title">Visión</h3>
              </header>
              <p className="principle-body">
                Formar profesionales con visión de futuro, liderazgo crítico y creativo, y apego
                a principios éticos universales; capaces de responder a su entorno ciudadano,
                transmitir conocimiento y proyectar impacto social y ecológico.
              </p>
            </article>

            <article className="principle-card principle-v2" aria-labelledby="mision-titulo">
              <header className="principle-header v2">
                <span className="principle-badge gold" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" role="img">
                    <path d="M12 2l2.5 5.2L20 8l-4 3.9L17 18l-5-2.6L7 18l1-6.1L4 8l5.5-.8L12 2z" fill="currentColor"/>
                  </svg>
                </span>
                <h3 id="mision-titulo" className="principle-title">Misión</h3>
              </header>
              <p className="principle-body">
                Ser una institución de educación superior reconocida por su calidad académica y
                respuesta a las demandas del entorno, fortaleciendo el desempeño estudiantil y la
                formación integral dentro de un marco humanista, de investigación y de
                responsabilidad social y ecológica.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="history-lite" aria-labelledby="historia-titulo">
        <div className="history-lite-container">
          <h2 id="historia-titulo" className="history-lite-title">Nuestra Historia</h2>
          <p className="history-lite-intro">
            Un vistazo ágil a nuestro recorrido. Si querés, podés desplegar la historia completa.
          </p>

          <div className="history-cards">
            <article className="history-card">
              <div className="hc-year">1990</div>
              <h3 className="hc-title">Fundación</h3>
              <p className="hc-text">
                Nacemos como universidad con vocación de autonomía, libertad académica y proyección nacional.
              </p>
            </article>
            <article className="history-card">
              <div className="hc-year">1992</div>
              <h3 className="hc-title">Autorización</h3>
              <p className="hc-text">
                El Estado costarricense autoriza la operación universitaria (CONESUP, sesión 203-92).
              </p>
            </article>
            <article className="history-card">
              <div className="hc-year">1995</div>
              <h3 className="hc-title">Expansión</h3>
              <p className="hc-text">
                Apertura de sedes en distintas regiones del país para acercar la educación superior.
              </p>
            </article>
            <article className="history-card">
              <div className="hc-year">2008</div>
              <h3 className="hc-title">Consolidación</h3>
              <p className="hc-text">
                Sede central y liderazgo institucional con enfoque en calidad académica y gestión.
              </p>
            </article>
          </div>

          <div className="history-toggle">
            <button
              className="history-btn"
              aria-expanded={showFullHistory}
              aria-controls="timeline-completo"
              onClick={() => setShowFullHistory(v => !v)}
            >
              {showFullHistory ? "Ocultar historia completa" : "Ver historia completa"}
              <span className={`chev ${showFullHistory ? "up" : "down"}`} aria-hidden="true">▾</span>
            </button>
          </div>

          <div id="timeline-completo" className={`timeline-full ${showFullHistory ? "open" : ""}`}>
            <div className="tf-line" aria-hidden="true"></div>

            <div className="tf-item left">
              <div className="tf-dot"><span>1990</span></div>
              <div className="tf-card">
                <h4 className="tf-title">Fundación</h4>
                <p className="tf-text">
                  La <strong>Universidad de San José</strong> se funda sobre principios de libertad y autonomía,
                  con visión abierta y proyección nacional, consolidando su autonomía jurídica, administrativa y financiera.
                </p>
              </div>
            </div>

            <div className="tf-item right">
              <div className="tf-dot gold"><span>1992</span></div>
              <div className="tf-card">
                <h4 className="tf-title">Autorización oficial</h4>
                <p className="tf-text">
                  En septiembre de 1992 el Estado autoriza la operación como universidad acreditada
                  (<strong>CONESUP, sesión 203-92</strong>, 17 de setiembre).
                </p>
              </div>
            </div>

            <div className="tf-item left">
              <div className="tf-dot"><span>1995</span></div>
              <div className="tf-card">
                <h4 className="tf-title">Expansión nacional</h4>
                <p className="tf-text">
                  Programas en áreas clave y apertura de sedes en San Carlos, Liberia, Nicoya, San Ramón,
                  Guápiles, Alajuela y aulas en Pocosol y Aguas Zarcas.
                </p>
              </div>
            </div>

            <div className="tf-item right">
              <div className="tf-dot"><span>2008</span></div>
              <div className="tf-card">
                <h4 className="tf-title">Sede central</h4>
                <p className="tf-text">
                  La Sede Central fija su asiento en Ciudad Quesada (Sede San Carlos).
                  La Rectoría mantiene su asiento en San José.
                </p>
              </div>
            </div>

            <div className="tf-item left">
              <div className="tf-dot today"><span>HOY</span></div>
              <div className="tf-card">
                <h4 className="tf-title">Presente</h4>
                <p className="tf-text">
                  Identidad enfocada en carreras de alto impacto y continuidad en áreas históricas,
                  con compromiso social y ecológico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoU;
