import React from "react";
import Input from "./Input";

export default ({
  text = "",
  placeholder = "",
  className = "",
  onChange = () => {}
}) => {
  return (
    <Input className={["InputText", className].join(" ")}>
      <input
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Input>
  );
};
