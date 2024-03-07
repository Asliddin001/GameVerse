import React from "react";
import { Hero } from "../../components/pages/home-page-components/hero/hero";
import { Community } from "../../components/pages/home-page-components/community/community";
import { OnlineServers } from "../../components/pages/home-page-components/onlineServers/onlineServers";
import { Registration } from "../../components/pages/home-page-components/registration/registration";
import { Connecting } from "../../components/pages/home-page-components/connecting/connecting";

export const Home = () => {
  return (
    <>
      <Hero />
      <OnlineServers />
      <Community />
      <Registration />
      <Connecting />
    </>
  );
};
