import { styled } from "styled-components";

export const BackFaqs = styled.section`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    121deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(9, 1, 34, 1) 50%,
    rgba(12, 0, 43, 1) 80%,
    rgba(20, 7, 57, 1) 100%
  );
  height: 30rem;
  @media screen and (max-width: 768px) {
    height: 90rem;
  }
  color: white;
`;

export const FaqsLimit = styled.div`
  width: 78.93rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Faqs = styled.div`
  width: 45%;
  margin: 3rem 0;
  & .name-faqs {
    font-family: "Ember Display";
    color: #7200e3;
    margin-left: 4.5rem;
    margin-top: -2rem;
  }
  & .learn-faqs {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 2.1rem;
    margin-left: 4.5rem;
    margin-top: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: 5rem 0;

    & .learn-faqs {
      font-size: 3rem;
    }
  }
`;

export const Accordion = styled.div`
  width: 55%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media screen and (max-width: 768px) {
    margin-left: 4.5rem;
    gap: 8rem;
    width: 100%;
  }
`;