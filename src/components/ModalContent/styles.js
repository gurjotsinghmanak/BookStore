import styled from "styled-components";
import { MODAL_HEADER_HEIGHT, MODAL_FOOTER_HEIGHT } from "utils/constants";
import Box from "components/Box";

export const Container = styled(Box)`
  width: 100%;
  max-height: calc(100vh - 40px - ${MODAL_HEADER_HEIGHT}px - ${MODAL_FOOTER_HEIGHT}px);
  padding: 12px 16px 16px;
  overflow: scroll;
`;
