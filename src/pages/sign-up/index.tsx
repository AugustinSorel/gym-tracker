import Link from "next/link";
import styled from "styled-components";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Head from "next/head";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Gym Tracker Sign Up</title>
        <meta name="description" content="Sign up to track your gym progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Main>
          <Title>Welcome back</Title>
          <SubTitle>Welcome back! Please enter your details</SubTitle>

          <Form onSubmit={(e) => e.preventDefault()}>
            <Input
              shape="form"
              labelText="name"
              htmlFor="nameInput"
              placeholder="Enter your name"
              autoComplete="off"
            />
            <Input
              shape="form"
              labelText="email"
              htmlFor="emailInput"
              placeholder="Enter your email"
              autoComplete="new-password"
            />
            <Input
              shape="form"
              labelText="password"
              type="password"
              htmlFor="passwordInput"
              placeholder="•••••••••••••"
            />

            <Button shape="callToAction" text="Sign up" type="submit" />
          </Form>

          <NavigationText>
            Already a member?{" "}
            <Link href={"/login"} passHref>
              <Anchor>Login</Anchor>
            </Link>
          </NavigationText>
        </Main>

        <CircleScreen />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const Main = styled.main`
  margin: auto;
  max-width: 85%;
`;

const Title = styled.h1`
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.gaps[100]};
`;

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors[500]};
  font-weight: 400;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[400]};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15% 0;
  display: flex;
  gap: ${({ theme }) => theme.gaps[700]};

  button[type="submit"] {
    margin-top: ${({ theme }) => theme.gaps[500]};
  }
`;

const NavigationText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors[900]};
  font-weight: 300;
`;

// TODO: create component for this
const Anchor = styled.a`
  color: ${({ theme }) => theme.colors.action};
  text-decoration: none;
  cursor: pointer;
  position: relative;
  outline: none;

  ::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.action};
    height: ${({ theme }) => theme.borderSizes[300]};
    width: 0;
    left: 0;
    bottom: -3px;
    transition: width 200ms ease-in-out;
  }

  :focus-visible::after,
  :hover::after {
    width: 100%;
  }
`;

const CircleScreen = styled.div`
  background-color: ${({ theme }) => theme.colors[200]};
  position: relative;
  width: 50%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }

  ::before {
    content: "";
    --circle-radius: 10rem;
    position: absolute;
    left: calc(50% - 5rem);
    top: calc(50% - 5rem);
    width: var(--circle-radius);
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.action};
    animation: breath 5s ease-in-out infinite alternate-reverse;

    @keyframes breath {
      from {
        transform: scale(1);
        box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.action};
      }
      to {
        transform: scale(1.1);
        box-shadow: 0 0 15px 10px ${({ theme }) => theme.colors.action};
      }
    }
  }

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 50%;
    backdrop-filter: blur(10px);
  }
`;

export default SignUpPage;
