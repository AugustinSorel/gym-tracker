import Button from "@/components/Button";
import SvgIcon from "@/components/SvgIcon";
import Head from "next/head";
import { useRouter } from "next/router";
import CircleScreenLayout from "src/layouts/CircleScreenLayout";
import * as Styles from "src/layouts/CircleScreenLayout/index.styled";
import { NextPageWithLayout } from "./_app";

const OfflinePage: NextPageWithLayout = () => {
  const router = useRouter();

  const goBack = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Gym Tracker verify account</title>
        <meta
          name="description"
          content="Verify your account with the email received"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles.Title>No internet connection</Styles.Title>
      <Styles.SubTitle>
        Activate your internet connection to proceed
      </Styles.SubTitle>

      <Styles.SvgContainer>
        <SvgIcon svgName="warning" />
      </Styles.SvgContainer>

      <Button role="callToAction" text="Go Home" onClick={goBack} />
    </>
  );
};

OfflinePage.getLayout = (page) => (
  <CircleScreenLayout>{page}</CircleScreenLayout>
);

export default OfflinePage;
