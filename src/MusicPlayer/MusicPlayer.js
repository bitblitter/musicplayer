import React, { Component } from "react";
import PlayerLayout from "./PlayerLayout";
import "./MusicPlayer.css";

export default class MusicPlayer extends Component {
  render() {
    return (
      <div className="MusicPlayer">
        <PlayerLayout />
      </div>
    );
  }
}
