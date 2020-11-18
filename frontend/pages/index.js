import React from "react";

import Layout from "../components/Layout";

const Home = () => {
  function changeText(e) {
    let text = e.target.textContent;
    let button = document.getElementById("btn");
    button.innerText = text;
  }

  return (
    <React.Fragment>
      <Layout>
        <main>
          <h1>Find a beach cleanup near you!</h1>
          <section className="dropdown">
            <button className="dropdown-btn" id="btn">
              Select your country
              <i className="fas fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <p onClick={changeText}>Hong Kong</p>
              <p onClick={changeText}>United States</p>
              <p onClick={changeText}>Canada</p>
              <p onClick={changeText}>Japan</p>
            </div>
          </section>
          <button type={"button"}>Find!</button>
        </main>
      </Layout>

      <style jsx>{`
        main {
          margin-top: 10vh;
          height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        button {
          min-width: 100px;
          height: 25px;
          border: 1px solid grey;
          border-radius: 4px;
          cursor: pointer;
        }

        // Dropdown

        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-btn {
          min-width: 160px;
          min-height: 30px;
          background: #f9f9f9;
          border: 1px solid black;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background: #f9f9f9;
          min-width: 160px;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          padding: 12px 16px;
          z-index: 1;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        p {
          cursor: pointer;
        }

        i {
          margin-left: 10px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Home;
