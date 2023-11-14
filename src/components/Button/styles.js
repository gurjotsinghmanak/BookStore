import styled, { css } from "styled-components";
// import Flex from "components/Flex";
import colors from "utils/colors";

export const commonStyles = () =>
  css`
    padding: 8px 12px;
    border-radius: 4px;
    transition: all 250ms ease;
  `;

const variantStyles = ({ $variant, disabled }) =>
  $variant === "contained" &&
  !disabled &&
  css`
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.1), 0px 2px 2px 0px rgba(0, 0, 0, 0.1),
      0px 1px 5px 0px rgba(0, 0, 0, 0.1);
    &:hover {
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
  `;

const colorStyles = ({ color, $variant, disabled }) =>
  (color === "red" &&
    $variant === "outlined" &&
    !disabled &&
    css`
      border: 1px solid ${colors.red1};
      background-color: ${colors.white};
      color: ${colors.red1};
      &:hover {
        background-color: ${colors.red1};
        color: ${colors.white};
      }
    `) ||
  (color === "primary" &&
    $variant === "contained" &&
    !disabled &&
    css`
      background-color: ${colors.primary};
      color: ${colors.white};
      &:hover {
        background-color: ${colors.primaryDark};
      }
    `) ||
  (color === "secondary" &&
    $variant === "contained" &&
    !disabled &&
    css`
      background-color: ${colors.secondary};
      color: ${colors.white};
      &:hover {
        background-color: ${colors.secondaryDark};
      }
    `);

const disabledStyles = ({ disabled, $variant }) =>
  disabled &&
  $variant === "contained" &&
  css`
    background-color: ${colors.gray1};
    color: ${colors.white};
    cursor: not-allowed;
  `;

export const Container = styled("button")`
  ${commonStyles}
  ${variantStyles}
  ${colorStyles}
  ${disabledStyles}
`;
