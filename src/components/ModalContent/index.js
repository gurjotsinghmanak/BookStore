import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function ModalContent({ children }) {
  return <Container>{children}</Container>;
}

ModalContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalContent;
