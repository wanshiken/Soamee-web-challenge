import React from "react";
import { Switch } from "react-router-dom";

import Routes from "./components/routes/index"

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes  />
      </Switch>
    </div>
  );
}

export default App;
