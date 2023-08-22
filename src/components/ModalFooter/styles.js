import styled from "styled-components";
import { MODAL_FOOTER_HEIGHT } from "utils/constants";
import Box from "components/Box";
import colors from "utils/colors";

export const Container = styled(Box)`
  width: 100%;
  height: ${MODAL_FOOTER_HEIGHT}px;
  border-top: 1px solid ${colors.gray1};
`;
