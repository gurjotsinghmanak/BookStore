import React from "react";
import PropTypes from "prop-types";

import { Background, Container } from "./styles";

function Modal({ open, children, onClose }) {
  if (open) {
    return (
      <>
        <Background onClick={onClose} />
        <Container>{children}</Container>
      </>
    );
  }
  return null;
}

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  open: false,
  onClose: null
};

export default Modal;
