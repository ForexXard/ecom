import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage.component";

function App() {
  return (
    <div>
      <Route path="/" component={HomePage} />
    </div>
  );
}

export default App;
