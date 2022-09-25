import * as Stlyes from "./index.styled";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MaxWidthLayout = ({ children }: Props) => {
  return <Stlyes.MaxWidthContaer>{children}</Stlyes.MaxWidthContaer>;
};

export default MaxWidthLayout;
