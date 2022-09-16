import * as Styles from "./index.styled";

type Props = {
  isLoading: boolean;
};

const Loader = ({ isLoading }: Props) => {
  if (!isLoading) {
    return null;
  }

  return <Styles.Loader />;
};

export default Loader;
