import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function Button({ children, color, variant, ...props }) {
  return (
    <Container color={color} $variant={variant} {...props}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string
};

Button.defaultProps = {
  color: "",
  variant: ""
};

export default Button;
