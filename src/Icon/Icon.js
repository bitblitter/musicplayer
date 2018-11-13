import React from "react";

export default ({ children, className = "" }) => {
  return <span className={["Icon", className].join(" ")}>{children}</span>;
};
