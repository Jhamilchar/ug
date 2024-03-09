import React, { useEffect, useState } from "react";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
import { Bar } from "../mini-components/Bar";
import logoShow from "../images/logo-show.png";
import logoAside from "../images/120x45_blanco.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-opened", isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setShowImage(true);
      } else {
        setIsScrolled(false);
        setShowImage(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Agrega o elimina la clase al cuerpo según el estado del menú
    document.body.classList.toggle("menu-opened", isMenuOpen);
  }, [isMenuOpen]);

  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-opened");
  };

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
          <div className="wrapper-container">
            <div className="container-menu_show">
              <h2 className="top-text">
                Inicia tu Viaje en <span className="color-special">AWS</span>{" "}
              </h2>
              <p className="desc-text">
                Descubre un mundo de oportunidades en la nube y únete a nuestra
                comunidad para aprender, compartir y crecer juntos
              </p>
            </div>
            <ul className="show-menu_wrapper">
              <li
                className="animate__animated  animate__fadeIn"
                style={{ animationDelay: "250ms" }}
              >
                <Link
                  to="section-home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="show-menu_items"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li
                className="animate__animated  animate__fadeIn"
                style={{ animationDelay: "450ms" }}
              >
                <Link
                  to="section-about"
                  spy={true}  
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="show-menu_items"
                  onClick={closeMenu}
                >
                  Acerca De
                </Link>
              </li>
              <li
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: "650ms" }}
              >
                <Link
                  to="section-blog"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="show-menu_items"
                  onClick={closeMenu}>
                  Blog
                </Link>
              </li>
              <li
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: "850ms" }}
              >
                <Link
                  to="section-faq"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                  className="show-menu_items"
                  onClick={closeMenu}
                 >
                  Faqs
                </Link>
              </li>
              <li
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: "1050ms" }}
              >
                <Link to="section-contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="show-menu_items"
                  onClick={closeMenu}>
                  Contactame
                </Link>
              </li>
            </ul>
            <img className="logo-show" src={logoShow} alt="" />
          </div>
        </div>
        <div className="animate__animated animate__slideInUp animate__delay-1s">
          <a
            className="conf-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.meetup.com/aws-para-todos/events/296038764/?_xtd=gqFyqTIyMzA1NTgzN6Fwo2FwaQ%253D%253D&from=ref/"
          >
            <span className="special-span">C</span>
            <span className="special-span">h</span>
            <span className="special-span">a</span>
            <span className="special-span">r</span>
            <span className="special-span">l</span>
            <span className="special-span">a</span>
            <span className="special-span"> </span>
            <span className="special-span">C</span>
            <span className="special-span">e</span>
            <span className="special-span">r</span>
            <span className="special-span">c</span>
            <span className="special-span">a</span>
            <span className="special-span">n</span>
            <span className="special-span">a</span>
            <span className="special-span">!</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
