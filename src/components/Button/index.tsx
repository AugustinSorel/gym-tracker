import Loader from "../Loader";
import * as Styles from "./index.styled";
import * as Props from "./props";
import useGoogleAuth from "./useGoogleAuth";

const Button = (props: Props.Button) => {
  if (props.role === "callToAction") {
    return <CallToActionButton {...props} />;
  }

  if (props.role === "googleAuth") {
    return <GoogleAuthButton />;
  }

  return <DefaultButton {...props} />;
};

const CallToActionButton = (props: Props.CallToAction) => {
  const { text, role, isLoading, ...rest } = props;
  return (
    <Styles.CallToAction {...rest}>
      <Styles.CallToActionText>{text}</Styles.CallToActionText>
      <Loader isLoading={isLoading} />
    </Styles.CallToAction>
  );
};

const GoogleAuthButton = () => {
  useGoogleAuth();

  return <Styles.GoogleAuthButton />;
};

const DefaultButton = ({ text, ...props }: Props.Default) => {
  return <Styles.Button {...props}>{text}</Styles.Button>;
};

export default Button;
