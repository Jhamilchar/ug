import { styled } from "styled-components";

export const Card = styled.div`
  border: 1px solid #7200e3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  width: 20rem;
  height: 27rem;
  @media screen and (max-width: 768px) {
    width: 38rem;
    height: 45rem;
    gap: 3rem;
  }
`;

export const ContainerImage = styled.div`
  width: 19.89rem;
  height: 10rem;
  @media screen and (max-width: 768px) {
    width: 37.89rem;
    height: 20rem;

  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.2rem;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  margin: 0 1rem;
  & .text-industry {
    color: white;
    font-size: 1.23rem;
    font-family: "Ember Mono";
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
  & p {
    color: white;
    font-family: "Ember Display";
    font-size: 0.78rem;
    letter-spacing: 0.1rem;
    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
      text-align: center;
    }
  }

  & a {
    position: relative;
    padding-bottom: 0.5rem;
    background-color: transparent;
    font-family: "Ember Mono";
    font-size: 0.89rem;
    color: white;
    border: none;
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
    &:hover {
      padding-bottom: 0.2rem;
      transition: 0.1s;
      transition: 0.5s;
    }
    &:hover::after {
      background-color: #7200e3;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ffc70b;
      transition: background-color 0.5s linear;
    }
  }
`;