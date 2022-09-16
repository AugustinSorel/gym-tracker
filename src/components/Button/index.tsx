import * as Styles from "./index.styled";
import * as Props from "./props";

const Button = (props: Props.Button) => {
  if (props.role === "callToAction") {
    return <CallToActionButton {...props} />;
  }

  return <DefaultButton {...props} />;
};

const CallToActionButton = ({ text, role, ...props }: Props.CallToAction) => {
  return <Styles.CallToAction {...props}>{text}</Styles.CallToAction>;
};

const DefaultButton = ({ text, ...props }: Props.DefaultButton) => {
  return <Styles.Button {...props}>{text}</Styles.Button>;
};

export default Button;
