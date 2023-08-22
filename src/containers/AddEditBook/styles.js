import styled from "styled-components";
import Flex from "components/Flex";
import Box from "components/Box";

export const FooterWrap = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

export const FieldWrap = styled(Box)`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
