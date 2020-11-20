import React, { useContext } from "react";
import { useRouter } from "next/router";

import countries from "../countries";
import { CountryContext } from "../context/CountryContext";
import Dropdown from "./Dropdown";

const HomePage = () => {
  const router = useRouter();
  const data = useContext(CountryContext);
  const initialText = "Select Your Country";

  function handle() {
    let buttonText = document.getElementById("btn-text").innerText;
    data.storeCountry(buttonText);
    if (buttonText === initialText) {
      alert("Please choose your country");
    } else {
      router.push("/results");
    }
  }

  return (
    <React.Fragment>
      <main>
        <h1>Find a beach cleanup near you!</h1>
        <Dropdown array={countries} text={initialText} />
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
      `}</style>
    </React.Fragment>
  );
};

export default HomePage;
