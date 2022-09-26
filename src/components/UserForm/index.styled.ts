import styled from "styled-components";
import { AuthProviderButton } from "../Button/index.styled";

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

export const AuthProviderErrorText = styled.p`
  padding-top: ${({ theme }) => theme.gaps[500]};
  color: ${({ theme }) => theme.colors.error};
  margin: 0 auto;
  text-align: center;
  max-width: 80%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 100%;
  }
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

export const Text = styled.p``;

export const GoogleButton = styled(AuthProviderButton)`
  background-color: #fff;
  color: #000;
  outline-color: #fff;
`;

export const GitHubButton = styled(AuthProviderButton)`
  background-color: #000;
  color: #fff;
  outline-color: #000;
`;
