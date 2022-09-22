import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15%;
  display: flex;
  gap: ${({ theme }) => theme.gaps[700]};
`;

export const AuthProvidersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps[700]};
`;

export const SeparatorText = styled.p`
  margin: ${({ theme }) => theme.gaps[900]} 0;
  text-align: center;
  --line-height: 1px;
  --line-width: 3rem;

  ::before,
  ::after {
    content: "";
    position: relative;
    background-color: ${({ theme }) => theme.colors[900]};
    display: inline-block;
    height: var(--line-height);
    vertical-align: middle;
    width: var(--line-width);
  }

  ::before {
    right: ${({ theme }) => theme.gaps[300]};
    margin-left: -50%;
  }

  ::after {
    left: ${({ theme }) => theme.gaps[300]};
    margin-right: -50%;
  }
`;
