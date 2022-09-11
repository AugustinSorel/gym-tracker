import Link, { LinkProps } from "next/link";
import * as Styles from "./index.styled";

type Props = {
  text: string;
} & LinkProps;

const Anchor = ({ text, ...props }: Props) => {
  return (
    <Link {...props} passHref>
      <Styles.Anchor>{text}</Styles.Anchor>
    </Link>
  );
};

export default Anchor;
