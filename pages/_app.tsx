import { AppProps } from "next/app";
import "../app/globals.css";
import React from "react";
import NavBar from "@/components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
