import {
  Card,
  Image,
  ContainerImage,
  ContainerInfo,
} from "../css-styled/cardTwitch.js";
import twitchImage from '../images/twitch.jpg'

export const CardTwitch = () => {
  return (
    <Card>
      <ContainerImage>
        <Image src={twitchImage} alt="" />
      </ContainerImage>
      <ContainerInfo>
        <h2 className="text-industry">Industry visionaries</h2>
        <p>
          AWS continues to revolutionize the global cloud industry while
          maintaining affordability, security, and high performance. Catch up
          with a few of last year’s top re:Invent keynote sessions.
        </p>
        <a href="/Twitch">Watch 2022 keynotes</a>
      </ContainerInfo>
    </Card>
  );
}
