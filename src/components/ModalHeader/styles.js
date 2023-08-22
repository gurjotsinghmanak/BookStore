import styled, { css } from "styled-components";
import { MODAL_HEADER_HEIGHT } from "utils/constants";
import Flex from "components/Flex";
import colors from "utils/colors";

export const closeButtonStyles = () =>
  css`
    content: "";
    position: absolute;
    top: 2px;
    left: 9px;
    width: 2px;
    height: 16px;
    background-color: ${colors.gray2};
  `;

export const Container = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${MODAL_HEADER_HEIGHT}px;
  padding: 8px 16px;
  border-bottom: 1px solid ${colors.gray1};
`;

export const Heading = styled("h4")`
  font-size: 20px;
  font-weight: 500;
`;

export const Close = styled("button")`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  transition: all 250ms ease;
  &:hover {
    background-color: ${colors.gray3};
  }
  &:before {
    transform: rotate(45deg);
    ${closeButtonStyles}
  }
  &:after {
    transform: rotate(-45deg);
    ${closeButtonStyles}
  }
`;
