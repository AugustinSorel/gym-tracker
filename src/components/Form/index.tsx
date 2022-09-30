import { FormEvent, ReactNode } from "react";
import * as Styles from "./index.styled";

type Props = {
  title: string;
  subTitle: string;
  children: ReactNode;
  submitHandler: () => void;
};

const Form = ({ title, subTitle, children, submitHandler }: Props) => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitHandler();
  };

  return (
    <Styles.Form onSubmit={onSubmit}>
      <Styles.Title>{title}</Styles.Title>
      <Styles.SubTitle>{subTitle}</Styles.SubTitle>

      {children}
    </Styles.Form>
  );
};

export default Form;
