import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import logo_footer from "../images/120x45_blanco.png";
import "../styles/footer.css";

const StyledIcon = styled(FontAwesomeIcon)`
  color: #22377E;
  font-size: 1.3rem;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    color: white;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 430px) {
    font-size: 3.4rem;
  }
`;

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="top-footer">
          <div className="">
            <img className="logo-footer" src={logo_footer} alt="" />
          </div>
          {/* <div className="middle">
          <div className=" mid-footer">
              <p className="title-footer">Our work</p>
              <a className="special-link_footer" href="">Perpetual Flight</a>
              <a className="special-link_footer" href="">Markets</a>
            </div>
            <div className="mid-footer">
              <p className="title-footer">Our Company</p>
              <a className="special-link_footer" href="">About</a>
              <a className="special-link_footer" href="">News</a>
            </div>
          </div> */}
            
          <div className="redes">
            <div className="container-button">
              <button className="button-footer">
                C o n t a c t a m e 
                <span>
                <FontAwesomeIcon className="icon-special" icon={faArrowRight} />
                </span>
              </button>
              
            </div>
            
            <div className="social">
              <a target="blank" href="https://www.instagram.com/awsperu/">
                <StyledIcon icon={faInstagram} />
              </a>

              <a target="blank" href="https://www.twitch.tv/awsugperu">
                <StyledIcon icon={faTwitch} />
              </a>

              <a target="blank" href="https://twitter.com/AWSPeru">
                <StyledIcon icon={faTwitter} />
              </a>

              <a
                target="blank"
                href="https://www.youtube.com/@AWSUserGroupPeruOficial"
              >
                <StyledIcon icon={faYoutube} />
              </a>

              <a target="blank" href="linkedin.com/company/awsusergroupperu/">
                <StyledIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="terms">
        <p className="terms-web">@ AWSparatodos2024. Todos los derechos rervados</p>
        <div>
          <a className="special-link_footer" href="r">Terminos de condiciones</a>
        </div>
      </div>
    </div>
  );
};
