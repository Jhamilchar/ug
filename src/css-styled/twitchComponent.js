import { styled } from "styled-components";

export const ContainerSection = styled.section`
  background-color: black;
  height: 50rem;
`;

export const LimitSection = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 78.93rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  & .name-twitch {
    color: #7200e3;
    font-family: "Ember Mono";
    margin-left: 4.5rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
`;

export const ContentCards = styled.div`
    display: flex;
    justify-content: space-around;
`