import styled from "styled-components";
import { zIndexes, BREAKPOINTS } from "utils/constants";
import Box from "components/Box";
import colors from "utils/colors";

export const Background = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${zIndexes.modalBg};
`;

export const Container = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  width: calc(100% - 32px);
  transform: translate(-50%, -50%);
  border-radius: 4px;
  background-color: ${colors.white};
  overflow: hidden;
  z-index: ${zIndexes.modal};
  @media (min-width: ${BREAKPOINTS.tab1}px) {
    width: 640px;
  }
`;
