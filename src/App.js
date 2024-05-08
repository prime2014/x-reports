import React from "react";
import Report from "./Components/reports/Reports";
import "primeflex/primeflex.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Report />} path="/" exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
