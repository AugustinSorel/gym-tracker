import * as Props from "./props";
import * as Styles from "./index.styled";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, Props.Input>((props, ref) => {
  if (props.role === "form") {
    return <FormInput ref={ref} {...props} />;
  }

  return <Styles.Input {...props} />;
});
Input.displayName = "InputComponent";

const FormInput = forwardRef<HTMLInputElement, Props.FormInput>(
  (props, ref) => {
    const { labelText, errorText, htmlFor, role, ...rest } = props;
    const isValid = errorText.length === 0;

    return (
      <Styles.FormInputContainer isValid={isValid}>
        <Styles.Label htmlFor={htmlFor}>{labelText}</Styles.Label>
        {errorText && <Styles.ErrorText>{errorText}</Styles.ErrorText>}
        <Styles.Input id={htmlFor} ref={ref} {...rest} />
      </Styles.FormInputContainer>
    );
  }
);
FormInput.displayName = "FormInputComponent";

export default Input;
