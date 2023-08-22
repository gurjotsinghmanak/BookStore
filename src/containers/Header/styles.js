import styled from "styled-components";
import { HEADER_HEIGHT, zIndexes } from "utils/constants";
import Flex from "components/Flex";
import colors from "utils/colors";

export const Container = styled(Flex)`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
`;

export const Wrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 0 16px;
  background-color: ${colors.primary};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
  color: ${colors.white};
  z-index: ${zIndexes.header};
`;

export const Logo = styled("h1")`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
