import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Home } from "./pages/home/home";
import { Navbar } from "./components/layouts/navbar/navbar";
import { Footer } from "./components/layouts/footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
