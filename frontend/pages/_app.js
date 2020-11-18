import React from "react";
import "../styles.css";

import { UserContextProvider } from "../context/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
