import React from "react";
import { Hero } from "../../components/pages/home-page-components/hero/hero";
import { Community } from "../../components/pages/home-page-components/community/community";
import { OnlineServers } from "../../components/pages/home-page-components/onlineServers/onlineServers";

export const Home = () => {
  return (
    <>
      <Hero />
      <OnlineServers />
      <Community />
    </>
  );
};
