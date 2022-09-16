import Loader from "../Loader";
import * as Styles from "./index.styled";
import * as Props from "./props";

const Button = (props: Props.Button) => {
  if (props.role === "callToAction") {
    return <CallToActionButton {...props} />;
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

const DefaultButton = ({ text, ...props }: Props.DefaultButton) => {
  return <Styles.Button {...props}>{text}</Styles.Button>;
};

export default Button;
