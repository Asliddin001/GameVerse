import React from "react";
import "./styles/App.css";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { OnlineServers } from "./components/onlineServers/onlineServers";
import { Community } from "./components/community/community";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <OnlineServers />
      <Community />
    </>
  );
}

export default App;
