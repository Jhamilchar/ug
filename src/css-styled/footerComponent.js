import { styled } from "styled-components";

export const BackFooter = styled.div`
  height: 39rem;
  background-color: #111111;
  @media screen and (max-width: 768px) {
    height: 50rem;
  }
  @media screen and (max-width: 450px) {
    height: 90rem;
  }
`;
export const LimitFooter = styled.div`
  width: 78.93rem;
  height: 100%;
  margin: 0 auto;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

export const TopFooter = styled.div`
  display: flex;
  height: 95%;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px){
    align-items: start;
    margin-left: 5rem;
    margin-top: 6rem;
    row-gap: 4rem;
  }
`

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
`;

export const InterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  & .input-text input {
    border-radius: 0.4rem;
    background-color: transparent;
    padding: 1rem 3rem;
    border: 1px solid #7200e3;
    color: white;
    @media screen and (max-width: 768px) {
      font-size: 1.44rem;
      margin-bottom: 1rem;
      padding: 1rem;
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
  }

  & button {
    background-color: #7200e3;
    border: none;
    padding: 1rem 6.5rem;
    border-radius: 0.9rem;
    cursor: pointer;
    transition: 0.5s;
    color: white;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
    &:hover {
      background-color: white;
      color: black;
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
  }
`;

export const SocialRedes = styled.div`
  display: flex;
  gap: 1rem;
`

export const RightFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 30rem;
  margin: auto 0;
  & a {
    font-size: 1.3rem;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const BottomFooter = styled.div`
  color: white;
  text-align: center;
  font-size: 0.8rem;
  height: 7%;
  & p {
    font-size: 1.1rem;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
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