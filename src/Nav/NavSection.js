import React from "react";
import { Pane } from "../LayoutPane";
import "./NavSection.css";
export default ({ title = "", children }) => {
  return (
    <Pane className="NavSection" layout="vertical" size="auto">
      {title && <h1>{title}</h1>}
      {children}
    </Pane>
  );
};
