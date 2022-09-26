import Image from "next/image";
import Loader from "../Loader";
import * as Styles from "./index.styled";
import * as Props from "./props";

const Button = (props: Props.Button) => {
  if (props.role === "callToAction") {
    return <CallToActionButton {...props} />;
  }

  if (props.role === "google") {
    return <GoogleButton {...props} />;
  }

  if (props.role === "gitHub") {
    return <GitHubButton {...props} />;
  }

  if (props.role === "newExercise") {
    return <NewExerciseButton {...props} />;
  }

  return <DefaultButton {...props} />;
};

const NewExerciseButton = (props: Props.NewExerciseButton) => {
  return <Styles.NewExerciseButton {...props}>+ </Styles.NewExerciseButton>;
};

const CallToActionButton = (props: Props.CallToAction) => {
  const { text, role, isLoading, ...rest } = props;
  return (
    <Styles.CallToAction {...rest}>
      <Styles.CallToActionText>{text}</Styles.CallToActionText>
      <Loader isLoading={isLoading ?? false} />
    </Styles.CallToAction>
  );
};

const GitHubButton = (props: Props.GitHubButton) => {
  return (
    <Styles.GitHubButton {...props}>
      <Image
        src={"/GitHubIcon.png"}
        alt="google icon"
        height={"20px"}
        width={"20px"}
      />
      <Styles.Text>Continue with Github</Styles.Text>
    </Styles.GitHubButton>
  );
};

const GoogleButton = (props: Props.GoogleButton) => {
  return (
    <Styles.GoogleButton {...props}>
      <Image
        src={"/GoogleIcon.png"}
        alt="google icon"
        height={"20px"}
        width={"20px"}
      />
      <Styles.Text>Continue with Google</Styles.Text>
    </Styles.GoogleButton>
  );
};

const DefaultButton = ({ text, ...props }: Props.DefaultButton) => {
  return <Styles.Button {...props}>{text}</Styles.Button>;
};

export default Button;
