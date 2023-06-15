import { styled } from "styled-components";

export const Card = styled.div`
  border: 1px solid #7200e3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  border-radius: 1rem;
  width: 20rem;
  height: 20rem;
  @media screen and (max-width: 768px) {
    width: 30rem;
    height: 25rem;
  }
`;

export const ContainerImage = styled.div`
  width: 19.9rem;
  height: 10rem;
  @media screen and (max-width: 768px) {
    width: 29.9rem;
    height: 14rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;


export const ContainerInfoNews = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  align-items: center;
  gap: 0.7rem;
  @media screen and (max-width: 768px) {
    gap: 2rem;
    font-size: 1.3rem;
  }
  & .descripton-news {
    color: white;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 0.79rem;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 1.06rem;
    }

    & .keynoutes-paragraph {
      color: black !important;
    }
  }
`;

export const Paragraph = styled.p`

`