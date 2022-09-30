import styled from "styled-components";

export const Container = styled.div`
  backdrop-filter: blur(${({ theme }) => theme.blur});
  border-radius: ${({ theme }) => theme.border.radius[500]};
  padding: ${({ theme }) => theme.gaps[500]};
`;

export const Text = styled.p`
  text-transform: capitalize;
`;
