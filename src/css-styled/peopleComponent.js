import styled from "styled-components";

export const DescriptionPeople = styled.section`
  background-color: #000000;
  display: flex;
`;

export const WraperPeople = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 78.93rem;
  height: 40rem;
  & .dual-img {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
  @media screen and (max-width: 450px) {
    width: 94rem;
    gap: 5rem;
  }
`;

export const ImageDeep = styled.img`
  width: 30rem;
  height: 16rem;
  margin-left: -12rem;
  @media screen and (max-width: 768px) {
    width: 85rem;
    height: 45rem;
  }
  @media screen and (max-width: 450px) {
    width: 94.44rem;
    height: 67rem;
  }
`;

export const ImageDeep2 = styled.img`
  width: 30rem;
  height: 16rem;
  margin-left: 3rem;
  @media screen and (max-width: 768px) {
    width: 85rem;
    height: 45rem;
  }
  @media screen and (max-width: 450px) {
    width: 94.44rem;
    height: 67rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 4.5rem;
  gap: 1.2rem;
  max-width: 50%;

  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  & h2 {
    color: #91bfff;
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
  }
  & h3 {
    color: white;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }
  & p {
    color: white;
    font-size: 1.1rem;
    font-family: "Lato";
    text-align: justify;
  }
  @media screen and (max-width: 768px) {
    & h2 {
      font-size: 1.7rem;
    }

    & h3 {
      font-size: 3rem;
    }

    & p {
      font-size: 1.7rem;
    }
    @media screen and (max-width: 450px) {
      & h2 {
        font-size: 3rem;
      }

      & h3 {
        font-size: 4rem;
      }

      & p {
        font-size: 2.7rem;
      }
    }
  }
`;