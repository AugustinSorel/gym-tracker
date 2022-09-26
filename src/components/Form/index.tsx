import { FormEvent, ReactNode } from "react";
import * as Styles from "./index.styled";

type Props = {
  title: string;
  subTitle: string;
  children: ReactNode;
  submitHandler: (e: FormEvent) => void;
};

const Form = ({ title, subTitle, children, submitHandler }: Props) => {
  return (
    <Styles.Form onSubmit={submitHandler}>
      <Styles.Title>{title}</Styles.Title>
      <Styles.SubTitle>{subTitle}</Styles.SubTitle>

      {children}
    </Styles.Form>
  );
};

export default Form;
