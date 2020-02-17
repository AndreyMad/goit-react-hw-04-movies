import React from "react";

import PropTypes from "prop-types";

const GoBack = ({ goBack }) => {
  return (
    <button type="button" onClick={goBack}>
      Go back
    </button>
  );
};
GoBack.propTypes = {
  goBack: PropTypes.func.isRequired
};
export default GoBack;
