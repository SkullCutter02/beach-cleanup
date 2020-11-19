import React from "react";
import "../styles.css";

import { UserContextProvider } from "../context/UserContext";
import { CountryContextProvider } from "../context/CountryContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <CountryContextProvider>
        <Component {...pageProps} />
      </CountryContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
