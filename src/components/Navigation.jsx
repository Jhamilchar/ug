import { Bar } from '../mini-components/Bar'
import '../styles/nav-styles.css'
import logo from '../images/wp__1_-removebg-preview.png'
import videoFile from '../video/background-principal.mp4'
import { useState } from 'react'
import "animate.css";


export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='container-navigation'>
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
              href="https://www.meetup.com/aws-para-todos/events/296038764/?_xtd=gqFyqTIyMzA1NTgzN6Fwo2FwaQ%253D%253D&from=ref/"
            >
              Charla Cercana !
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
            <h2 className="content-card__title">Charla de Orientación: Explora tu Futuro en Tecnología con AWS</h2>
            <h2 className="content-card__subtitle">
              Desde los Fundamentos hasta AWS: Tu Viaje en Tecnología Comienza Aquí
            </h2>
            <p className="content-card__paragraphe">
              Hoy, a las 9pm, estamos emocionados de ofrecer una charla de nivel básico, para el mundo tecnológico con un enfoque en Amazon Web Services (AWS).
            </p>
            <div>
              <a target='_blank' href='https://www.meetup.com/aws-para-todos/' className="card__button">Unete <span>;)</span></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
