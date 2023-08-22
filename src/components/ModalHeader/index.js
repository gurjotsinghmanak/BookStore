import React from "react";
import PropTypes from "prop-types";

import { Container, Heading, Close } from "./styles";

function ModalHeader({ children, onClose }) {
  return (
    <Container>
      <Heading>{children}</Heading>
      {onClose && <Close onClick={onClose} />}
    </Container>
  );
}

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ModalHeader;
