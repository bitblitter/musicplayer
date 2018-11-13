import React from "react";
import InputText from "./InputText";
import "./InputSearch.css";
import { Icon } from "../Icon";
import { FaSearch } from "react-icons/fa";

export default ({ text = "", placeholder = "", onChange = () => {} }) => {
  return (
    <div className="InputSearch">
      <Icon className="search">
        <FaSearch />
      </Icon>
      <InputText text={text} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};
