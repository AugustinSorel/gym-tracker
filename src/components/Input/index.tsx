import * as Props from "./props";
import * as Styles from "./index.styled";

const Input = (props: Props.Input) => {
  if (props.shape === "form") {
    return <FormInput {...props} />;
  }

  return <Styles.Input {...props} />;
};

const FormInput = (props: Props.FormInput) => {
  const { labelText, errorText, htmlFor } = props;
  return (
    <Styles.FormInputContainer>
      <Styles.Label htmlFor={htmlFor}>{labelText}</Styles.Label>
      <Styles.ErrorText>{errorText}</Styles.ErrorText>
      <Styles.Input id={htmlFor} {...props} />
    </Styles.FormInputContainer>
  );
};

export default Input;
