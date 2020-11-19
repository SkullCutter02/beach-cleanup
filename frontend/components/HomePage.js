import React, { useContext } from "react";
import { useRouter } from "next/router";

import countries from "../countries";
import { CountryContext } from "../context/CountryContext";

const HomePage = () => {
  const router = useRouter();
  const data = useContext(CountryContext);

  function changeText(e) {
    let text = e.target.textContent;
    let button = document.getElementById("btn-text");
    button.innerText = text;
  }

  function handle() {
    let buttonText = document.getElementById("btn-text").innerText;
    data.storeCountry(buttonText);
    if (buttonText === "Select Your Country") {
      alert("Please choose your country");
    } else {
      router.push("/results");
    }
  }

  return (
    <React.Fragment>
      <main>
        <h1>Find a beach cleanup near you!</h1>
        <section className="dropdown">
          <button className="dropdown-btn">
            <span id="btn-text">Select Your Country</span>
            <i className="fas fa-caret-down" />
          </button>
          <div className="dropdown-content">
            {countries.map((country) => {
              return <p onClick={changeText}>{country}</p>;
            })}
          </div>
        </section>
        <button onClick={handle}>Find!</button>
      </main>

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
          max-height: 200px;
          overflow: scroll;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        p {
          cursor: pointer;
        }

        i {
          margin-left: 10px;
          position: absolute;
          top: 30%;
          left: 80%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default HomePage;
