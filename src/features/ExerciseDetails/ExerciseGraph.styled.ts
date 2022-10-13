import SkeletonLoader from "src/styles/shared/SkeletonLoader.styled";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors[200]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const GraphSection = styled.section`
  height: 85%;
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.desktop} {
    overflow: hidden;
  }
`;

export const ContainerSkeleton = styled(Container)`
  ${SkeletonLoader}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  fill: currentColor;
  background-color: ${({ theme }) => theme.colors[300]};
  padding: ${({ theme }) => theme.gaps[200]};
  border-top-left-radius: ${({ theme }) => theme.border.radius[500]};
  border-top-right-radius: ${({ theme }) => theme.border.radius[500]};
`;

export const HeaderSkeleton = styled(Header)`
  height: 45px;
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors[300]};
  padding: ${({ theme }) => theme.gaps[200]};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps[900]};
  border-bottom-left-radius: ${({ theme }) => theme.border.radius[500]};
  border-bottom-right-radius: ${({ theme }) => theme.border.radius[500]};
`;

export const FooterSkeleton = styled(Footer)`
  height: 45px;
`;

export const ExerciseName = styled.h2`
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[600]};
  white-space: nowrap;
  flex: 1;
`;
