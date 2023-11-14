import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function Button({ children, color, variant, disabled, ...props }) {
  return (
    <Container color={color} $variant={variant} disabled={disabled} {...props}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  color: "",
  variant: "",
  disabled: false
};

export default Button;
