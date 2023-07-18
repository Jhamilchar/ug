import { styled } from "styled-components";

export const ContainerSection = styled.section`
  background-color: black;
  height: 40rem;
  @media screen and (max-width: 768px) {
    height: 120rem;
  }
  @media screen and (max-width: 450px) {
    height: 260rem;
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
  @media screen and (max-width: 450px) {
    width: 94rem;
  }
  & .name-twitch {
    color: #91bfff;
    margin-left: 4.5rem;
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.7rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 3rem;
    }
  }
`;

export const ContentCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 3rem;
  @media screen and (max-width: 450px) {
    align-items: center;
    flex-direction: column;
    row-gap: 7rem;
  }
`;