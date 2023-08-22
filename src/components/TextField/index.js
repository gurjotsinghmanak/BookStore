import React from "react";
import PropTypes from "prop-types";

import { TextArea, Field } from "./styles";

function TextField({ isMultiline, ...props }) {
  if (isMultiline) return <TextArea {...props} />;
  return <Field {...props} />;
}

TextField.propTypes = {
  isMultiline: PropTypes.bool
};

TextField.defaultProps = {
  isMultiline: false
};

export default TextField;
