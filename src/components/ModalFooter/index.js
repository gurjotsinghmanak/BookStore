import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function ModalFooter({ children }) {
  return <Container>{children}</Container>;
}

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalFooter;
