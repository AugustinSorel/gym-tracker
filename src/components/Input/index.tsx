import * as Props from "./props";
import * as Styles from "./index.styled";

const Input = (props: Props.Input) => {
  if (props.role === "form") {
    return <FormInput {...props} />;
  }

  return <Styles.Input {...props} />;
};

const FormInput = (props: Props.FormInput) => {
  const { labelText, errorText, htmlFor, role, ...rest } = props;

  return (
    <Styles.FormInputContainer isValid={!!!errorText}>
      <Styles.Label htmlFor={htmlFor}>{labelText}</Styles.Label>
      {errorText && <Styles.ErrorText>{errorText}</Styles.ErrorText>}
      <Styles.Input id={htmlFor} {...rest} />
    </Styles.FormInputContainer>
  );
};

export default Input;
