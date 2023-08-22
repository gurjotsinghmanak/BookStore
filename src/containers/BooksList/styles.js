import styled from "styled-components";
import { HEADER_HEIGHT, BREAKPOINTS, BOOKS_MARGIN } from "utils/constants";
import Flex from "components/Flex";
import Box from "components/Box";
import colors from "utils/colors";

export const Container = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  max-height: calc(100vh - ${HEADER_HEIGHT}px);
  background-color: ${colors.white};
`;

export const ListItem = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - (2 * (${BOOKS_MARGIN}px)));
  margin: ${BOOKS_MARGIN}px 0 0 ${BOOKS_MARGIN}px;
  padding: 12px 16px;
  border: 1px solid ${colors.gray1};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray3};
  }
  @media (min-width: ${BREAKPOINTS.tab1}px) {
    width: calc((100% - (3 * (${BOOKS_MARGIN}px))) / 2);
  }
  @media (min-width: ${BREAKPOINTS.tab2}px) {
    width: calc((100% - (4 * (${BOOKS_MARGIN}px))) / 3);
  }
  @media (min-width: ${BREAKPOINTS.desktop1}px) {
    width: calc((100% - (5 * (${BOOKS_MARGIN}px))) / 4);
  }
  @media (min-width: ${BREAKPOINTS.desktop2}px) {
    width: calc((100% - (6 * (${BOOKS_MARGIN}px))) / 5);
  }
`;

export const Name = styled("h2")`
  font-size: 18px;
  font-weight: 500;
`;

export const Category = styled("h3")`
  color: ${colors.gray2};
  font-weight: 400;
`;

export const Price = styled(Box)`
  margin-bottom: 8px;
  font-size: 24px;
  &:before {
    content: "$";
    position: relative;
    top: -7px;
    margin-right: 2px;
    font-size: 13px;
  }
`;

export const Placeholder = styled(Box)`
  width: 100%;
  margin: 24px 0;
  color: ${colors.gray2};
  font-size: 16px;
  text-align: center;
`;
