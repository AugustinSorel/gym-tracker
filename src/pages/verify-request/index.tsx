import Button from "@/components/Button";
import SvgIcon from "@/components/SvgIcon";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as Styles from "src/layouts/authLayout/index.styled";
import AuthLayout from "src/layouts/authLayout";
import { NextPageWithLayout } from "../_app";

const VerifyRequestPage: NextPageWithLayout = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (status === "authenticated") {
    router.push("/");
    return null;
  }

  const goBack = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Gym Tracker Sign Up</title>
        <meta name="description" content="Sign up to track your gym progress" />
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

VerifyRequestPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default VerifyRequestPage;
