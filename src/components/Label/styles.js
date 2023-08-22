import styled from "styled-components";
import Box from "components/Box";
import colors from "utils/colors";

export const Container = styled(Box)`
  margin-bottom: 8px;
`;

export const Asterisk = styled("span")({
  color: colors.red1
});
