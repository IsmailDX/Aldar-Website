import SectionTwo from "@/components/SectionTwo";
import SwiperComponent from "@/components/SwiperComponent";
import Filter from "@/components/Filter";
import React from "react";
import Property from "@/components/Property";

const Home = () => {
  return (
    <>
      <title>Aldar Home Page</title>
      <SwiperComponent />
      <SectionTwo />
      <Filter />
      <Property />
    </>
  );
};
export default Home;
