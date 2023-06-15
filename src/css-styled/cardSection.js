import { styled } from "styled-components";

export const BackNews = styled.div`
  height: 40rem;
  background: rgb(0, 0, 0);
  @media screen and (max-width: 768px) {
    background: rgb(0, 0, 0);
    height: 78rem;
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
    color: #7200e3;
    font-family: "Ember Display";
    font-weight: 200;
    margin-left: 4.5rem;
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }
  & a {
  }
  & a:hover {
    text-decoration: underline;
  }
`;


export const ContentCardsNews = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 7rem;
`

