import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes/AllRoutes";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
