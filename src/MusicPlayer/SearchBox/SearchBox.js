import React, { Component } from "react";
import { Pane } from "../../LayoutPane";
import "./SearchBox.css";
import { InputSearch } from "../../Input";

export default ({ text = "", placeholder = "", onChange = () => {} }) => {
  return (
    <Pane className="SearchBox">
      <InputSearch text={text} placeholder={placeholder} onChange={onChange} />
    </Pane>
  );
};
