import React from "react";

import "./Input.css";

export default ({ children, className = "" }) => {
  return <div className={["Input", className].join(" ")}>{children}</div>;
};
