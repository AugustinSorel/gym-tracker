import * as Styles from "./GridSkeleton.styled";

const GridSkeleton = () => {
  return (
    <Styles.GridSkeleton>
      {[...Array(10)].map((_, i) => (
        <Styles.ContainerSkeleton key={i}>
          <Styles.HeaderSkeleton />
        </Styles.ContainerSkeleton>
      ))}
    </Styles.GridSkeleton>
  );
};

export default GridSkeleton;
