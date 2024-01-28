import "../../styles/parallax.css";
import {
  Element
} from "react-scroll";

const Parallax = () => {

  return (
    <Element name='section-home'  className="parallax">
      <div className="mountains"></div>
        <div className="container-texts">
          <h1 className="special-text">
            AWS para Todos, AWS para Ti
          </h1>
          <p className="special-text-2">
            Descubre el Poder de AWS
          </p>
        </div>
    </Element>
  );
};

export default Parallax;
