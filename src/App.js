import React from "react";
import "./styles.css";
import TalentTree from "./components/TalentTree";
import Test from "./components/Test";

var WebFont = require("webfontloader");

WebFont.load({
  google: {
    families: ["Alegreya Sans", "sans-serif"]
  }
});

export default function App() {
  return (
    <div className="App">
      <h1>Rogue Talent Tree</h1>
      <TalentTree />
    </div>
  );
}
