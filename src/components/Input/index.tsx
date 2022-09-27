import * as Props from "./props";
import * as Styles from "./index.styled";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, Props.Input>((props, ref) => {
  if (props.role === "form") {
    return <FormInput ref={ref} {...props} />;
  }

  return <Styles.Input {...props} />;
});

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

export default Input;
