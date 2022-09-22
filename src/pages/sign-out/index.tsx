import Head from "next/head";
import AuthLayout from "src/layouts/authLayout";
import { NextPageWithLayout } from "../_app";
import * as Styles from "src/layouts/authLayout/index.styled";
import SvgIcon from "@/components/SvgIcon";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const SignOutPage: NextPageWithLayout = () => {
  const router = useRouter();

  const goBackHandler = () => {
    router.push("/");
  };

  const signOutHandler = () => {
    signOut({ callbackUrl: "/sign-in", redirect: false });
  };

  return (
    <>
      <Head>
        <title>Gym Tracker Sign out</title>
        <meta name="description" content="Sign out to your application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles.Title>Signing out</Styles.Title>
      <Styles.SubTitle>Are you sure you want to sign out ?</Styles.SubTitle>

      <Styles.SvgContainer>
        <SvgIcon svgName="signOut" />
      </Styles.SvgContainer>

      <Styles.SigningOutContainer>
        <Button role="callToAction" text="Go back" onClick={goBackHandler} />
        <Button role="callToAction" text="Sign out" onClick={signOutHandler} />
      </Styles.SigningOutContainer>
    </>
  );
};

SignOutPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default SignOutPage;
