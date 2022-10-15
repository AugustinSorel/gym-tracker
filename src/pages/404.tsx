import Head from "next/head";
import CircleScreenLayout from "src/layouts/CircleScreenLayout";
import { NextPageWithLayout } from "./_app";
import * as Styles from "src/layouts/CircleScreenLayout/index.styled";
import { useRouter } from "next/router";
import SvgIcon from "@/components/SvgIcon";
import Button from "@/components/Button";

const PageNotFound: NextPageWithLayout = () => {
  const router = useRouter();

  const goBack = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Gym Tracker verify account</title>
        <meta name="description" content="page not found error" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles.Title>Page not found</Styles.Title>
      <Styles.SubTitle>404 Page not found error</Styles.SubTitle>

      <Styles.SvgContainer>
        <SvgIcon svgName="warning" />
      </Styles.SvgContainer>

      <Button role="callToAction" text="Go home" onClick={goBack} />
    </>
  );
};

PageNotFound.getLayout = (page) => (
  <CircleScreenLayout>{page}</CircleScreenLayout>
);

export default PageNotFound;
