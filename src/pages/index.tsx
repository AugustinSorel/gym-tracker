import Head from "next/head";
import { MaxWidthContainer } from "src/layouts/MaxWidthLayout/index.styled";
import UnauthorizedOnlyRoute from "src/layouts/UnauthorizedOnlyRoute";
import styled from "styled-components";
import { NextPageWithLayout } from "./_app";

const Container = styled(MaxWidthContainer)`
  max-width: 1200px;
  margin-top: max(${({ theme }) => theme.gaps[900]}, 10%);
`;

const Title = styled.h1`
  font-size: 7rem;
  line-height: 7rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[900]};
    line-height: normal;
  }
`;

export const Span = styled.span`
  background: -webkit-linear-gradient(
    left,
    ${({ theme }) => theme.colors.action},
    hsl(200, 100%, 70%)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Paragraph = styled.p`
  margin-top: 3.5rem;
  font-size: ${({ theme }) => theme.fontSizes[900]};
  color: ${({ theme }) => theme.colors[600]};
  max-width: 75%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 100%;
    font-size: ${({ theme }) => theme.fontSizes[500]};
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin-top: ${({ theme }) => theme.gaps[900]};
  max-width: 75%;
`;

export const ListItem = styled.li`
  flex: 1;
`;

export const Svg = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
})`
  width: 40px;
  height: 40px;
  fill: currentColor;
  background: -webkit-linear-gradient(
    left,
    ${({ theme }) => theme.colors.action},
    hsl(200, 100%, 60%)
  );
  padding: ${({ theme }) => theme.gaps[200]};
  border-radius: ${({ theme }) => theme.border.radius[700]};
`;

const ListItemTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[500]};
  text-transform: capitalize;
`;

const ListItemParagraph = styled.p`
  color: ${({ theme }) => theme.colors[500]};
  font-size: ${({ theme }) => theme.fontSizes[400]};
`;

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Gym Tracker Home</title>
        <meta
          name="description"
          content="View your gym progress with the gym tracker app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>
        A <Span>fully featured</Span> gym tracker app
      </Title>
      <Paragraph>
        Track your gym progress by adding your custom exercises. Analyse and
        view your progress by the help of graphs
      </Paragraph>

      <List>
        <ListItem>
          <Svg>
            <path d="M5 7c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm19-4v8h-13v13h-8v-13h-3v-8h3v-3h8v3h13zm-19 0h4v-1h-4v1zm4 8h-4v11h4v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2zm13-6h-2v3h-1v-3h-2v2h-1v-2h-2v3h-1v-3h-2v2h-1v-2h-2v3h-1v-3h-5v4h20v-4z" />
          </Svg>
          <ListItemTitle>tailor made</ListItemTitle>
          <ListItemParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          </ListItemParagraph>
        </ListItem>
        <ListItem>
          <Svg>
            <path d="M5 7c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm19-4v8h-13v13h-8v-13h-3v-8h3v-3h8v3h13zm-19 0h4v-1h-4v1zm4 8h-4v11h4v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2zm13-6h-2v3h-1v-3h-2v2h-1v-2h-2v3h-1v-3h-2v2h-1v-2h-2v3h-1v-3h-5v4h20v-4z" />
          </Svg>
          <ListItemTitle>tailor made</ListItemTitle>
          <ListItemParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          </ListItemParagraph>
        </ListItem>
        <ListItem>
          <Svg>
            <path d="M5 7c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm19-4v8h-13v13h-8v-13h-3v-8h3v-3h8v3h13zm-19 0h4v-1h-4v1zm4 8h-4v11h4v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2zm13-6h-2v3h-1v-3h-2v2h-1v-2h-2v3h-1v-3h-2v2h-1v-2h-2v3h-1v-3h-5v4h20v-4z" />
          </Svg>
          <ListItemTitle>tailor made</ListItemTitle>
          <ListItemParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          </ListItemParagraph>
        </ListItem>
      </List>
    </>
  );
};

Home.getLayout = (page) => {
  return (
    <UnauthorizedOnlyRoute>
      <Container>{page}</Container>
    </UnauthorizedOnlyRoute>
  );
};

export default Home;
