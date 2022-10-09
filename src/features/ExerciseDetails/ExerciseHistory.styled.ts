import scrollbar from "src/styles/shared/scrollbar.styled";
import SkeletonLoader from "src/styles/shared/SkeletonLoader.styled";
import styled, { css, keyframes } from "styled-components";

export const List = styled.ul`
  border-radius: ${({ theme }) => theme.border.radius[500]};
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

export const ListItem = styled.li<{ delay?: number }>`
  display: flex;
  padding: ${({ theme }) => theme.gaps[500]} ${({ theme }) => theme.gaps[200]};

  &:first-child {
    font-size: ${({ theme }) => theme.fontSizes[600]};
    position: sticky;
    padding: ${({ theme }) => theme.gaps[200]};
    top: 0;
    backdrop-filter: blur(${({ theme }) => theme.blur});
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors[300]};
  }

  & > * {
    flex: 1;
  }

  ${({ delay }) =>
    delay &&
    css`
      animation-name: ${listItemAnimation};
      animation-duration: ${({ theme }) => theme.animation.durations[300]};
      animation-timing-function: ${({ theme }) =>
        theme.animation.timingFunction};
      animation-delay: ${delay}ms;
      animation-fill-mode: both;
    `};
`;

export const ListItemSkeleton = styled(ListItem)`
  padding: ${({ theme }) => theme.gaps[900]};

  &:first-child {
    padding: ${({ theme }) => theme.gaps[600]};
  }
`;

export const Text = styled.p``;
