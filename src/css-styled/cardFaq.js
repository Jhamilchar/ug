import { styled } from "styled-components";

export const Accord = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & .title {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-right: 6rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: .6rem;
  }

  & .title span {
    font-size: 1.4rem;
    font-family: 'Ember Mono';
  }
  @media screen and (max-width: 768px){
    & .title {
      font-size: 1.25rem;
      margin-bottom: 2.3rem;
    }
  }
`;

export const Description = styled.div`
  color: #ffffff;
  max-height: 0;
  overflow: hidden;
  margin-right: 7rem;
  font-family: "Ember Mono";
  font-size: 0.78rem;
  &.show {
    height: auto;
    max-height: 9999px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;