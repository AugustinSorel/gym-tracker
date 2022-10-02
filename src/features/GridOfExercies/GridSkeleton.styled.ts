import SkeletonLoader from "src/styles/shared/SkeletonLoader.styled";
import styled from "styled-components";
import { Grid } from "./index.styled";
import { Container, Header } from "./GridItem.styled";

export const GridSkeleton = styled(Grid)`
  ${SkeletonLoader}
`;

export const ContainerSkeleton = styled(Container)``;

export const HeaderSkeleton = styled(Header)`
  height: ${({ theme }) => theme.fontSizes[900]};
`;
