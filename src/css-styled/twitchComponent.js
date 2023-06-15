import { styled } from "styled-components";

export const ContainerSection = styled.section`
  background-color: black;
  height: 50rem;
  @media screen and (max-width: 768px) {
    height: 120rem;
  }
`;

export const LimitSection = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 78.93rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  @media screen and (max-width: 768px) {
  }
  & .name-twitch {
    color: #7200e3;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin-left: 4.5rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    @media screen and (max-width: 768px) {
      font-size: 1.7rem;
    }
  }
`;

export const ContentCards = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 3rem;
`