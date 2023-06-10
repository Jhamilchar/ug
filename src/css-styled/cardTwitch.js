import { styled } from "styled-components";

export const Card = styled.div`
  border: 1px solid #7200e3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  width: 20rem;
  height: 27rem;
`;

export const ContainerImage = styled.div`
  width: 19.890rem;
  height: 10rem;
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
  }
  & p {
    color: white;
    font-family: sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
  }

  & a {
    position: relative;
    padding-bottom: 0.5rem;
    background-color: transparent;
    font-family: "Ember Mono";
    font-size: 0.8rem;
    color: white;
    border: none;
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