import React from "react";

import Layout from "../components/Layout";

const About = () => {
  return (
    <React.Fragment>
      <Layout>
        <h1>About Us</h1>
        <div>
          <p>
            We are a team of 3 that all share a love for the ocean and it pains
            us to know that marine animals are suffering due to human
            interference. According to National Geographic, there are 5.25
            trillion pieces of plastic debris floating around in the ocean.
            Therefore, in an effort to make a difference, to do our part in
            protecting the environment, we have created a platform for people to
            easily host and/or join beach cleanups in their region.
          </p>
        </div>
      </Layout>

      <style jsx>{`
        h1 {
          text-align: center;
          margin-top: 50px;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          height: 100vh;
          margin-top: 30px;
        }

        p {
          width: 20%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default About;
