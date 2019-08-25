import React from "react";

import "./custom-button.styles.scss";

const CostumBtton = ({ children, ...otherProps }) => (
  <button className="costum-button" {...otherProps}>
    {children}
  </button>
);

export default CostumBtton;
