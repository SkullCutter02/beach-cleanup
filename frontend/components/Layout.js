import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div>
        <Head>
          <title>Beach Cleanup</title>
          <script
            src="https://kit.fontawesome.com/a40d908160.js"
            crossOrigin="anonymous"
          />
        </Head>
        <Navbar />
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
