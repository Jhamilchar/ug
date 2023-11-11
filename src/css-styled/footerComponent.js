import { styled } from "styled-components";

export const BackFooter = styled.div`
  height: 12rem;
  background-color: #000000;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0; /* Ajusta la posición izquierda según tus preferencias */
    top: 0;
    bottom: 0;
    width: .7rem; /* Ancho del borde degradado */
    background: linear-gradient(
      to bottom,
      #10acaa,
      #072a38,
      #650262,
      #0f0b65,
      #201640
    );
    z-index: 2; /* Para que el borde esté detrás del contenido */
  }
  @media screen and (max-width: 768px) {
    height: 50rem;
  }
  @media screen and (max-width: 450px) {
    height: 118rem;
  }
`;
export const LimitFooter = styled.div`
  width: 78.93rem;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 450px){
    width: 94rem;
  }
`;

export const TopFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  .logo-footer {
    width: 18.2rem;
  }
  @media screen and (max-width: 768px) {
    align-items: start;
    margin-left: 5rem;
    margin-top: 6rem;
    row-gap: 4rem;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const LeftFooter = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 15rem;
  margin-left: 5rem;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    gap: 7rem;
  }
  @media screen and (max-width: 450px) {
    margin-left: 0;
    gap: 12rem;
  }
`;

export const InterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  @media screen and (max-width: 450px) {
    gap: 2rem;
  }

  & .input-text input {
    border-radius: 0.4rem;
    background-color: transparent;
    padding: 1rem 3.6rem;
    border: 1px solid #244057;
    color: white;
    @media screen and (max-width: 768px) {
      font-size: 1.44rem;
      margin-bottom: 1rem;
      padding: 1rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 3.7rem;
    }
  }

  & h3 {
    line-height: 2.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.4rem;
    @media screen and (max-width: 768px) {
      line-height: 4rem;
      font-size: 2.7rem;
    }
    @media screen and (max-width: 450px) {
      line-height: 6.43rem;
      font-size: 6rem;
    }
  }

  & button {
    background-color: #244057;
    border: none;
    padding: 1rem 7.2rem;
    border-radius: 0.9rem;
    cursor: pointer;
    transition: 0.5s;
    color: white;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 3.3rem;
    }
    &:hover {
      background: linear-gradient(
        to left,
        #10acaa,
        #072a38,
        #650262,
        #0f0b65,
        #201640
      );
      transition: 0.5s;
      color: #ffffff;
    }
  }
`;

export const RedesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & p {
    font-size: 1.1rem;
    @media screen and (max-width: 768px) {
      font-size: 2.1rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 5rem;
      gap: 1.8rem;
    }
  }
`;

export const SocialRedes = styled.div`
  display: flex;
  gap: 1rem;
    @media screen and (max-width: 450px) {
      gap: 3rem;
    }
`;

export const RightFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 30rem;
  margin: auto 0;
  & a {
    color: white;
    font-size: 1.2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 3rem;
    }
  }
`;

export const BottomFooter = styled.div`
  color: white;
  text-align: center;
  font-size: 0.8rem;
  height: 7%;
  @media screen and (max-width: 450px) {
    height: 10%;
  }
  & p {
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 2.6rem;
    }
  }
  & .left-line {
    width: 5px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-image: linear, left top, left bottom, color-stop(2.55%, #ffc70b),
      color-stop(19.79%, #ee4423), color-stop(39.07%, #983b95),
      color-stop(79.69%, #0f0b65), to(#201640);
    background-image: linear-gradient(
      180deg,
      #ffc70b 2.55%,
      #ee4423 19.79%,
      #983b95 39.07%,
      #0f0b65 79.69%,
      #201640
    );
  }
`;