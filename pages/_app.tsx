import { AppProps } from "next/app";
import "../app/globals.css";
import React from "react";
import NavBar from "@/components/NavBar";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="red"
        startPosition={0.3}
        stopDelayMs={100}
        height={5}
        showOnShallow={true}
      />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
