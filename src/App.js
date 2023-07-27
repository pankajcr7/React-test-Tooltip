import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip content="This is a tooltip!">
        Hover over me!
      </Tooltip>
    </div>
  );
}

export default App;