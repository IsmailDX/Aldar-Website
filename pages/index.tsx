import SectionTwo from "@/components/SectionTwo";
import SwiperComponent from "@/components/SwiperComponent";
import Filter from "@/components/Filter";
import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Aldar Home Page</title>
        <meta
          name="description"
          content="Checkout our amazing deals for properties"
          key="desc"
        />
        <meta property="og:title" content="Aldar Website for properties" />
        <meta
          property="og:description"
          content="Check out the best properties with aldar properties. The best offers and greatest deals are waiting for you."
        />
        <meta property="og:image" content="/images/aldar-logo.png" />
      </Head>

      <SwiperComponent />
      <SectionTwo />
      <Filter />
    </>
  );
};
export default Home;
