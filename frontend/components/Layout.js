import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Beach Cleanup | Find One or Host Your Own</title>
        <script
          src="https://kit.fontawesome.com/a40d908160.js"
          crossOrigin="anonymous"
        />
      </Head>
      <div>
        <Navbar />
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
