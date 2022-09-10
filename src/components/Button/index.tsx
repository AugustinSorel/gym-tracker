import * as Styles from "./index.styled";
import * as Props from "./props";

const Button = (props: Props.Button) => {
  if (props.shape === "callToAction") {
    return <CallToActionButton {...props} />;
  }

  return <Styles.Button {...props} />;
};

const CallToActionButton = ({ text, ...props }: Props.CallToAction) => {
  return <Styles.CallToAction {...props}>{text}</Styles.CallToAction>;
};

export default Button;
