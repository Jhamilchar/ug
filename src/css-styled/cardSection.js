import { styled } from "styled-components";

export const BackNews = styled.div`
  height: 40rem;
  background: rgb(0, 0, 0);
  @media screen and (max-width: 768px) {
    background: rgb(0, 0, 0);
    height: 78rem;
  }
  @media screen and (max-width: 450px) {
    background: rgb(0, 0, 0);
    height: 200rem;
  }
`;

export const LimitNews = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 78.93rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8rem;
  & p {
    color: #91bfff;
    font-weight: 200;
    margin-left: 4.5rem;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
  }
  & a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 450px) {
    width: 94rem;
    & p {
      font-size: 4.57rem;
    }
  }
`;


export const ContentCardsNews = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 7rem;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;

