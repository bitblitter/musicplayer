import React from "react";
import "./Pane.css";

export default ({
  children,
  layout = "horizontal",
  className = "",
  size = 0
}) => {
  const sizeString =
    typeof size === "string" ? size : size > 0 ? size + "%" : "";
  const flexClass = sizeString === "" ? "" : "autosize";
  const styles = {
    flexBasis: size ? sizeString : "auto"
  };
  const classNames = ["Pane", layout, className, flexClass].join(" ");
  return (
    <div className={classNames} style={styles}>
      {children}
    </div>
  );
};
