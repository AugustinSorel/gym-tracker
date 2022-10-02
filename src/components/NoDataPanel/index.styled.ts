import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    height: 75px;
    width: 75px;
    fill: ${({ theme }) => theme.colors[500]};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[900]};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors[500]};
`;
