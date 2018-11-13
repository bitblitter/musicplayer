import React from "react";
import { Pane } from "../../LayoutPane";
import "./PlayerLayout.css";
import { SideBar } from "../SideBar";
import { SearchBox } from "../SearchBox";
import { NavLinks } from "../../Nav";

export default ({ onSearchChange = () => {} }) => {
  return (
    <div className="PlayerLayout">
      <Pane layout="vertical">
        <Pane layout="horizontal">
          <Pane size="200px">
            <SideBar />
          </Pane>
          <Pane layout="vertical" className="pane-main">
            <Pane size="auto">
              <SearchBox
                text=""
                placeholder="Search"
                onChange={onSearchChange}
              />
              <Pane size="auto" className="UserPane">
                John Doe
              </Pane>
            </Pane>
            <Pane className="pane-content">Content</Pane>
          </Pane>
        </Pane>
        <Pane size="100px">player controls</Pane>
      </Pane>
    </div>
  );
};
