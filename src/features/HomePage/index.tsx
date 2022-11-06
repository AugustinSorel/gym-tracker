import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import * as Styles from "./index.styled";

const HomePage = () => {
  return (
    <Styles.Container>
      <Styles.Title>
        A <Styles.Span>fully featured</Styles.Span> gym tracker app
      </Styles.Title>
      <Styles.Paragraph>
        Track your gym progress by adding your custom exercises. Analyse and
        view your progress by the help of graphs
      </Styles.Paragraph>

      <Styles.List>
        <Card
          paragraph="Add your favorite exercises and track your progress"
          title="tailor made"
          svgName="ruler"
        />

        <Card
          paragraph="This service is 100% and all of the code is available on github"
          title="free and open source"
          svgName="accessibility"
        />

        <Card
          paragraph="Available on the web as well as on mobile !"
          title="use anywhere"
          svgName="spaceShip"
        />
      </Styles.List>

      <Styles.LinksContainer>
        <Link href={"/sign-in"} passHref>
          <Styles.Anchor>
            <Styles.AnchorText>get started</Styles.AnchorText>
          </Styles.Anchor>
        </Link>

        <Link href={"https://github.com/AugustinSorel/gym-tracker"} passHref>
          <Styles.Anchor target={"_blank"}>
            <Image
              src={"/GitHubIcon.png"}
              alt="google icon"
              height={"20px"}
              width={"20px"}
            />
            <Styles.AnchorText>github</Styles.AnchorText>
          </Styles.Anchor>
        </Link>
      </Styles.LinksContainer>
    </Styles.Container>
  );
};

export default HomePage;
