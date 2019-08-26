import React from "react";

import "./custom-button.styles.scss";

const CostumBtton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? "google-sign-in": ""} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CostumBtton;
