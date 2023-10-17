import {
  BackFooter,
  LimitFooter,
  TopFooter,
  BottomFooter,
  LeftFooter,
  RightFooter,
  InterLeft,
  RedesContainer,
  SocialRedes,
} from "../css-styled/footerComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitch, faTwitter, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logoBlue from '../images/aws_para_todos_sin_fondo.png'
import styled from "styled-components";

const StyledIcon = styled(FontAwesomeIcon)`
  color: #244057;
  font-size: 1.3rem;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    color: white;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 4rem;
  }
`;


export const Footer = () => {
  return (
    <BackFooter>
      <LimitFooter>
        <TopFooter>
          <LeftFooter>
            <InterLeft>
              <img className="logo-footer" src={logoBlue} alt="" />
              <div className="input-text">
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <button type="submit" className="subscribe">
                  Subscribe
                </button>
              </div>
            </InterLeft>
            <RedesContainer>
              <p>Follow AWS on social media</p>
              <SocialRedes>
                <a target="blank" href="https://www.facebook.com/awsugperu">
                  <StyledIcon icon={faFacebookF} />
                </a>
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
              </SocialRedes>
            </RedesContainer>
          </LeftFooter>
          <RightFooter>
            <a href="">Terms and Conditions</a>
            <a href="">Become a Sponsor</a>
          </RightFooter>
        </TopFooter>
        <BottomFooter>
          <p>
            Privacy • Site Terms • Cookie Preferences • © 2023, Amazon Web
            Services, Inc. or its affiliates. All rights reserved.
          </p>
        </BottomFooter>
      </LimitFooter>
    </BackFooter>
  );
}
