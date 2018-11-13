import React, { Component } from "react";
import { Pane } from "../../LayoutPane";
import "./SideBar.css";
import { NavLinks, NavSection, NavLink } from "../../Nav";

export default class SideBar extends Component {
  render() {
    return (
      <Pane className="SideBar" layout="vertical">
        <NavSection>
          <NavLinks>
            <NavLink>Explore</NavLink>
            <NavLink>Radio</NavLink>
          </NavLinks>
        </NavSection>
        <NavSection title="Your Library">
          <NavLinks>
            <NavLink>Listened to recently</NavLink>
            <NavLink>Songs</NavLink>
            <NavLink>Albums</NavLink>
            <NavLink>Artists</NavLink>
            <NavLink>Broadcasts</NavLink>
            <NavLink>Local Files</NavLink>
            <NavLink>Videos</NavLink>
            <NavLink>Podcasts</NavLink>
          </NavLinks>
        </NavSection>
        <NavSection title="Playlists">
          <NavLinks>
            <NavLink>Apparat+Moderat</NavLink>
            <NavLink>Bonobo</NavLink>
          </NavLinks>
        </NavSection>
      </Pane>
    );
  }
}
