import { Bar } from '../mini-components/Bar'
import '../styles/nav-styles.css'
import logo from '../images/logo.png'
import videoFile from '../video/background-principal.mp4'
import { useState } from 'react'
import "animate.css";


export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <video autoPlay loop muted>
        <source src={videoFile} />
      </video>
      <div className="wraper-nav">
        <div className="nav-top">
          <div
            className="cont-bar animate__animated animate__slideInLeft animate__delay-.8s"
            onClick={toggleMenu}
          >
            <Bar />
          </div>
          <ul className={isMenuOpen ? "menu-open" : "menu-closed"}>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
          </ul>
          <div className="animate__animated animate__slideInUp animate__delay-.8s">
            <a
              className="conf-link"
              target="_blank"
              href="https://conf.ugperu.cloud/"
            >
              V.2023{" "}
            </a>
          </div>
        </div>
        <div className="nav-bottom">
          <div>
            <img
              className="animate__animated animate__slideInUp animate__delay-.8s logo-principal"
              src={logo}
              alt="asd"
            />
          </div>
          <div className="content-card animate__animated animate__slideInUp animate__delay-.8s">
            <h2 className="content-card__title">GET READY</h2>
            <h2 className="content-card__subtitle">
              Get ready for AWS UG PERU CONF 2023
            </h2>
            <p className="content-card__paragraphe">
              Registration opens June 14 for the most-anticipated cloud industry
              event of the year.
            </p>
            <div>
              <button className="card__button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
