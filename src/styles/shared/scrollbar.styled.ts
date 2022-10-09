import { css } from "styled-components";

const scrollbar = css`
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors[300]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors[500]};
  }
`;

export default scrollbar;
