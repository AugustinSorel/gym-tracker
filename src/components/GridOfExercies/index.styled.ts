import SkeletonLoader from "src/styles/shared/SkeletonLoader.styled";
import styled, { keyframes } from "styled-components";

export const Grid = styled.main`
  gap: ${({ theme }) => theme.gaps[900]};
  margin-top: ${({ theme }) => theme.gaps[900]};

  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0.25fr));

  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: repeat(auto-fit, 100%);
  }
`;

export const GridSkeleton = styled(Grid)`
  ${SkeletonLoader}
`;

export const Item = styled.div`
  background-color: ${({ theme }) => theme.colors[200]};
  aspect-ratio: 1;
  cursor: pointer;
  outline: none;
  border-radius: ${({ theme }) => theme.border.radius[300]};
  overflow: hidden;

  display: flex;
  flex-direction: column;

  transition-property: transform, background-color;
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};
  transition-duration: ${({ theme }) => theme.animation.durations[300]};
`;

export const ItemSkeleton = styled(Item)``;

export const ExerciseName = styled.h2`
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[600]};
  white-space: nowrap;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors[300]};
  padding: ${({ theme }) => theme.gaps[200]};

  transition-property: background-color;
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};
  transition-duration: ${({ theme }) => theme.animation.durations[300]};
`;

export const HeaderSkeleton = styled(Header)`
  height: ${({ theme }) => theme.fontSizes[900]};
`;

export const Graph = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors[400]};
  margin: ${({ theme }) => theme.gaps[900]};
`;

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(0.8);
  }
`;

export const Anchor = styled.a<{ delay: number }>`
  color: inherit;
  text-decoration: none;
  outline: none;

  animation: ${scaleUp}, ${fade} both;
  animation-duration: ${({ theme }) => theme.animation.durations[300]};
  animation-timing-function: ${({ theme }) => theme.animation.timingFunction};
  animation-delay: ${({ delay }) => delay}ms;

  transition-property: transform, background-color;
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};
  transition-duration: ${({ theme }) => theme.animation.durations[300]};

  & * {
    cursor: pointer;
  }

  &:focus-visible,
  &:hover {
    transform: scale(1.02);

    & > div {
      background-color: ${({ theme }) => theme.colors[300]};
    }

    header {
      background-color: ${({ theme }) => theme.colors[400]};
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;
