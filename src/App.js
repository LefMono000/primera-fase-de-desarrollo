import React from 'react';
import './App.css';
import image from './banner.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="top-bar">
          <a href="#register">Registro de residente</a> / <a href="#login">Iniciar Sesión</a>
        </div>
        <div className="header-image">
          <img
            src={ image }
            alt="Comunidad feliz mirando al frente"
            className="banner-image"
          />
        </div>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="#inicio">INICIO</a></li>
          <li><a href="#pagos">Pagos de la comunidad</a></li>
          <li><a href="#calendario">Calendario de eventos</a></li>
          <li><a href="#contactos">Contactos de emergencia</a></li>
          <li><a href="#foro">Foro residencial</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <section className="about-us">
          <h2>¿Quienes somos?</h2>
          <p>
            Aquiii puedes inventarte datos sobre la comunidad residencial Los Robles, poner datos geográficos y hablar bien de la comunidad. Podemos inventarlo por ser algo ficticio, es solo para ir rellenando. De preferencia un párrafo o dos de información.
          </p>
          <div className="image-placeholder">
            <p>Espacio para colocar una imagen, ayúdame a reservar el espacio y dejar listo para el hipervínculo plz</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Contacto: Ayuntamiento de Los Robles - Teléfono: (123) 456-7890 - Email: contacto@losrobles.com</p>
      </footer>
    </div>
  );
}

export default App;

