import React from "react";
import PropTypes from "prop-types";
import { Container, Asterisk } from "./styles";

function Label({ children, required }) {
  return (
    <Container>
      {children}
      {required && <Asterisk>*</Asterisk>}
    </Container>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  required: PropTypes.bool
};

Label.defaultProps = {
  required: false
};

export default Label;
