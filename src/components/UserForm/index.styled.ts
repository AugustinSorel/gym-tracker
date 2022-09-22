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

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.gaps[100]};
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors[500]};
  font-weight: 400;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[500]};
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

export const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10% 0;
  fill: ${({ theme }) => theme.colors[500]};
`;
