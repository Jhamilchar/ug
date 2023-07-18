import {
  BackNews,
  LimitNews,
  ContentCardsNews,
} from "../css-styled/cardSection.js";
import { CardNews } from "../mini-components/CardNews.jsx";


export const NewsSection = () => {
  return (
    <BackNews>
      <LimitNews>
          <p>BLOG</p>
        <ContentCardsNews>
          <CardNews />
          <CardNews />
          <CardNews />
        </ContentCardsNews>
      </LimitNews>
    </BackNews>
  );
}
