import "../styles/blog-section.css";
import fade2 from "../images/fade2.png";
import {
  Element
} from "react-scroll";
import aws from "../images/special.png";

export const Blogs = () => {
  return (
    <Element name="section-blog" className="blog-wrapper">
      <div className="blog-container">
        <div className="wraper-container">
        <div className="top-blog">
          <h2 className="title-blog">Ultimas charlas</h2>
        </div>
        <div className="bot-blog">
          <div className="cards-blog">
            <div className="container-logo_aws">
              <img className="position-aws" src={aws} alt="" />
            </div>
            <div className="details">
              <a className="link-blog" href="https://www.meetup.com/es-ES/aws-para-todos/events/296440967/" target="_blank">Despierta Tu Curiosidad Tecnológica: Una Guía para Principiantes</a>
              <p className="date-blog">Oct 10, 2023</p>
            </div>
          </div>
          <div className="cards-blog">
            <div className="container-logo_aws">
              <img className="position-aws" src={aws} alt="" />
            </div>
            <div className="details">
              <a className="link-blog" href="https://www.meetup.com/es-ES/aws-para-todos/events/296038764/">Tu Brújula Digital: Cómo Elegir Tu Futura Carrera en Tecnología</a>
              <p className="date-blog">Sep 11, 2023</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <img className="fade-2" src={fade2} alt="" />
    </Element>
  );
};
