import Button from "@/components/Button";
import ExerciseGraph from "@/components/ExerciseGraph";
import ExerciseHistory from "@/components/ExerciseHistory";
import Head from "next/head";
import { useRouter } from "next/router";
import HeaderLayout from "src/layouts/HeaderLayout";
import MaxWidthLayout from "src/layouts/MaxWidthLayout";
import PriveRouteLayout from "src/layouts/PrivateRouteLayout";
import styled from "styled-components";
import { NextPageWithLayout } from "../_app";

const Main = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 75vh;
  gap: ${({ theme }) => theme.gaps[900]};
  margin-top: ${({ theme }) => theme.gaps[900]};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 100%;
    grid-template-rows: 75vh 75vh;

    & > *:first-child {
      grid-row-start: 2;
    }
  }
`;

const ExercisePage: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Exercise {router.query.id}</title>
        <meta
          name="description"
          content="View your gym progress with the gym tracker app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <ExerciseHistory />

        <ExerciseGraph />
      </Main>

      <Button role="newExercise" />
    </>
  );
};

ExercisePage.getLayout = (page) => {
  return (
    <PriveRouteLayout>
      <MaxWidthLayout>
        <HeaderLayout />
        {page}
      </MaxWidthLayout>
    </PriveRouteLayout>
  );
};

export default ExercisePage;
