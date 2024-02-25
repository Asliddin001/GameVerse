import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Home } from "./pages/home/home";
import { Navbar } from "./components/layouts/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
