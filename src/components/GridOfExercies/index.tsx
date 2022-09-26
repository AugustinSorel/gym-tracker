import * as Styles from "./index.styled";

const GridOfExercises = () => {
  return (
    <Styles.Grid>
      {[...Array(10)].map((_, i) => (
        <Styles.Item tabIndex={0} key={i} delay={i * 50} />
      ))}
    </Styles.Grid>
  );
};

export default GridOfExercises;
