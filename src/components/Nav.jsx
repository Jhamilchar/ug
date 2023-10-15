import React, { useEffect, useState } from "react";
import { Bar } from "../mini-components/Bar";
import logoAside from '../images/aws_para_todos_sin_fondo.png'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setShowImage(true); // Muestra la imagen
      } else {
        setIsScrolled(false);
        setShowImage(false); // Oculta la imagen
      }
    };

    // Llama a handleScroll al cargar la página para establecer el estado inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-top ${isScrolled ? "scrolled" : ""}`}>
      <div className="wraper-nav-top">
        <div
          className="cont-bar animate__animated animate__slideInLeft animate__delay-.8s"
          onClick={toggleMenu}
        >
          <Bar />
        </div>
        {showImage && (
          <img src={logoAside} alt="Imagen" className="side-image" />
        )}
        <div className={isMenuOpen ? "menu-open" : "menu-closed"}>
          <div className="container-menu_show">
            <h2 className="top-text">Inicia tu Viaje en AWS</h2>
            <p className="desc-text">
              Descubre un mundo de oportunidades en la nube y únete a nuestra
              comunidad para aprender, compartir y crecer juntos
            </p>
          </div>
          <ul className="show-menu_wrapper">
            <li>
              <a className="show-menu_items" href="">
                Home
              </a>
            </li>
            <li>
              <a className="show-menu_items" href="">
                Acerca De
              </a>
            </li>
            <li>
              <a className="show-menu_items" href="">
                Objetivos
              </a>
            </li>
            <li>
              <a className="show-menu_items" href="">
                Faqs
              </a>
            </li>
            <li>
              <a className="show-menu_items" href="">
                Contact
              </a>
            </li>
          </ul>
          <li>Pendiente</li>
        </div>
        <div className="animate__animated animate__slideInUp animate__delay-.8s">
          <a
            className="conf-link"
            target="_blank"
            href="https://www.meetup.com/aws-para-todos/events/296038764/?_xtd=gqFyqTIyMzA1NTgzN6Fwo2FwaQ%253D%253D&from=ref/"
          >
            Charla Cercana!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav