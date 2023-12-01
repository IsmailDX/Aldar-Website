import { AppProps } from "next/app";
import "../app/globals.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
