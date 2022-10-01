import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors[200]};
  display: flex;
  flex-direction: column;

  & > svg {
    fill: currentColor;
    margin: auto;
    margin-bottom: 0;

    height: 50px;
    width: 50px;
    fill: ${({ theme }) => theme.colors[500]};
  }
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

export const ExerciseName = styled.h2`
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[600]};
  white-space: nowrap;
`;

export const NoDataText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[900]};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors[500]};
  margin: auto;
  margin-top: 0;
`;
