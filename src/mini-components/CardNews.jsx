import {
  Card,
  ContainerImage,
  ContainerInfoNews,
  Image,
} from "../css-styled/newCard";
import newsImages from '../images/confNews.jpeg'

export const CardNews = () => {
  return (
    <Card>
      <ContainerImage>
        <Image src={newsImages} alt="" />
      </ContainerImage>
      <ContainerInfoNews>
        <h4 className="descripton-news">
          AWS continues to revolutionize the global cloud industry while
          maintaining affordability
        </h4>
        <a className="keynoutes-paragraph" href="/Twitch">Watch 2022 keynotes</a>
      </ContainerInfoNews>
    </Card>
  );
}
