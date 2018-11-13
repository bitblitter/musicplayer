import React, { Component } from "react";
import { Pane } from "../LayoutPane";

export default ({ children }) => {
  return (
    <Pane className="NavLinks" layout="vertical">
      {children}
    </Pane>
  );
};
