import * as Props from "./props";
import * as Styles from "./index.styled";
import { useState } from "react";

const Input = (props: Props.Input) => {
  if (props.role === "form") {
    return <FormInput {...props} />;
  }

  if (props.role === "editable") {
    return <EditableInput {...props} />;
  }

  return <Styles.Input {...props} />;
};

const EditableInput = (props: Props.EditableInput) => {
  const { value, onBlurEvent, ...rest } = props;
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const submitHandler = () => {
    setIsEditingMode(false);

    try {
      onBlurEvent(inputValue);
    } catch (error) {
      setInputValue(value);
    }
  };

  if (isEditingMode) {
    return (
      <Styles.EditableInput
        ref={(e) => e?.focus()}
        value={inputValue}
        onKeyDown={(e) => e.key === "Enter" && submitHandler()}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={submitHandler}
        {...rest}
      />
    );
  }

  return (
    <Styles.EditableText onDoubleClick={() => setIsEditingMode(true)}>
      {inputValue}
    </Styles.EditableText>
  );
};

const FormInput = (props: Props.FormInput) => {
  const { labelText, errorText, htmlFor, role, ...rest } = props;
  const isValid = errorText.length === 0;

  return (
    <Styles.FormInputContainer isValid={isValid}>
      <Styles.Label htmlFor={htmlFor}>{labelText}</Styles.Label>
      {errorText && <Styles.ErrorText>{errorText}</Styles.ErrorText>}
      <Styles.Input id={htmlFor} {...rest} />
    </Styles.FormInputContainer>
  );
};

export default Input;
