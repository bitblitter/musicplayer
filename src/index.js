import React from "react";
import ReactDOM from "react-dom";
import { MusicPlayer } from "./MusicPlayer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MusicPlayer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
