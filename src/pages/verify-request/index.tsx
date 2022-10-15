import Button from "@/components/Button";
import SvgIcon from "@/components/SvgIcon";
import Head from "next/head";
import { useRouter } from "next/router";
import CircleScreenLayout from "src/layouts/CircleScreenLayout";
import * as Styles from "src/layouts/CircleScreenLayout/index.styled";
import UnauthorizedOnlyRoute from "src/layouts/UnauthorizedOnlyRoute";
import { NextPageWithLayout } from "../_app";

const VerifyRequestPage: NextPageWithLayout = () => {
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

      <Styles.Title>Check your email</Styles.Title>
      <Styles.SubTitle>
        Activate your account via email you received
      </Styles.SubTitle>

      <Styles.SvgContainer>
        <SvgIcon svgName="email" />
      </Styles.SvgContainer>

      <Button role="callToAction" text="Go back" onClick={goBack} />
    </>
  );
};

VerifyRequestPage.getLayout = (page) => (
  <UnauthorizedOnlyRoute>
    <CircleScreenLayout>{page}</CircleScreenLayout>
  </UnauthorizedOnlyRoute>
);

export default VerifyRequestPage;
