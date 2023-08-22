import styled, { css } from "styled-components";
import colors from "utils/colors";

export const commonStyles = () =>
  css`
    width: 100%;
    border: 1px solid ${colors.gray1};
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    &:hover {
      border-color: ${colors.gray2};
    }
    &:focus {
      border-color: ${colors.primary};
      border-width: 1.5px;
    }
  `;

export const TextArea = styled("textarea")`
  height: 120px;
  padding: 4px 8px;
  font-family: inherit;
  line-height: 20px;
  &:focus {
    padding: 3.5px 7.5px;
  }
  ${commonStyles}
`;

export const Field = styled("input")`
  height: 40px;
  padding: 0 8px;
  &:focus {
    padding: 0 7.5px;
  }
  ${commonStyles}
`;
