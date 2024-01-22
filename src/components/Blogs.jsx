import "../styles/blog-section.css";
import fade2 from "../images/fade2.png";
import aws from "../images/special.png";

export const Blogs = () => {
  return (
    <div className="blog-wrapper">
      <div className="blog-container">
        <div className="top-blog">
          <h2>Contenido Exclusivo para Todos</h2>
        </div>
        <div className="bot-blog">
          <div className="cards-blog">
            <div className="container-logo_aws">
              <img className="position-aws" src={aws} alt="" />
            </div>
            <div className="details">
              <a className="link-blog" href="#blog">Celebrate the Ti on all platforms just for fun or more</a>
              <p className="date-blog">Jun 30, 2023</p>
            </div>
          </div>
          <div className="cards-blog">
            <div className="container-logo_aws">
              <img className="position-aws" src={aws} alt="" />
            </div>
            <div className="details">
              <a className="link-blog" href="#blog">Celebrate the Ti on all platforms and simple dont see this ti</a>
              <p className="date-blog">Jun 30, 2023</p>
            </div>
          </div>
        </div>
      </div>
      <img className="fade-2" src={fade2} alt="" />
    </div>
  );
};
