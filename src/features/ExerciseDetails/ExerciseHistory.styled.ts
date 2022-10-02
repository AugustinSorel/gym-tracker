import scrollbar from "src/styles/shared/scrollbar.styled";
import SkeletonLoader from "src/styles/shared/SkeletonLoader.styled";
import styled, { keyframes } from "styled-components";

export const List = styled.ul`
  background-color: ${({ theme }) => theme.colors[200]};
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: auto;

  ${scrollbar}
`;

export const ListSkeleton = styled(List)`
  overflow: hidden;

  ${SkeletonLoader}
`;

const listItemAnimation = keyframes`
  from {
    opacity: 0;
    translate: -20px;
  }

  to {
    opacity: 1;
    translate: 0;

  }
`;

export const ListItem = styled.li<{ delay: number }>`
  display: flex;
  padding: ${({ theme }) => theme.gaps[500]};

  &:first-child {
    position: sticky;
    top: 0;
    backdrop-filter: blur(${({ theme }) => theme.blur});
  }

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors[300]};
  }

  & > * {
    flex: 1;
  }

  animation-name: ${listItemAnimation};
  animation-duration: ${({ theme }) => theme.animation.durations[300]};
  animation-timing-function: ${({ theme }) => theme.animation.timingFunction};
  animation-delay: ${({ delay }) => delay}ms;
  animation-fill-mode: both;
`;

export const ListItemSkeleton = styled.li`
  padding: ${({ theme }) => theme.gaps[500]};

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors[300]};
  }
`;

export const OneRepMax = styled.p``;

export const Weight = styled.p``;

export const NumberOfReps = styled.p``;

export const Date = styled.p``;
