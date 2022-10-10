import Loader from "../Loader";
import SvgIcon from "../SvgIcon";
import * as Styles from "./index.styled";
import * as Props from "./props";

const Button = (props: Props.Button) => {
  if (props.role === "callToAction") {
    return <CallToActionButton {...props} />;
  }

  if (props.role === "newExercise") {
    return <NewExerciseButton {...props} />;
  }

  if (props.role === "svg") {
    return <SvgButton {...props} />;
  }

  return <DefaultButton {...props} />;
};

const NewExerciseButton = ({ role, ...props }: Props.NewExerciseButton) => {
  return <Styles.NewExerciseButton {...props}>+ </Styles.NewExerciseButton>;
};

const SvgButton = ({ svgName, role, ...props }: Props.SvgButton) => {
  return (
    <Styles.SvgButtonContainer {...props}>
      <SvgIcon svgName={svgName} />
    </Styles.SvgButtonContainer>
  );
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

const DefaultButton = ({ text, role, ...props }: Props.DefaultButton) => {
  return <Styles.DefaultButton {...props}>{text}</Styles.DefaultButton>;
};

export default Button;
