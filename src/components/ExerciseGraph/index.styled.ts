import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors[200]};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors[300]};
  padding: ${({ theme }) => theme.gaps[200]};
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors[300]};
  padding: ${({ theme }) => theme.gaps[200]};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps[900]};
`;

export const TimeText = styled.p`
  text-transform: uppercase;
`;

export const ExerciseName = styled.h2`
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[600]};
  white-space: nowrap;
`;
