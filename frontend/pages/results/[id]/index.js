import React, { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../../components/Layout";

const HostingSpecifics = () => {
  const router = useRouter();
  const { id } = router.query;
  const [state, setState] = useState([]);

  fetch("http://localhost:1337/hostings")
    .then((res) => res.json())
    .then((data) => {
      setState(data.filter((hosting) => hosting.uuid === id));
    })
    .catch((err) => console.log(err));

  let end = "";
  if (state.length !== 0) {
    switch (
      state[0].day.toString().charAt(state[0].day.toString().length - 1)
    ) {
      case "1":
        end = "st";
        break;
      case "2":
        end = "nd";
        break;
      case "3":
        end = "rd";
        break;
      default:
        end = "th";
        break;
    }
  }

  return (
    <React.Fragment>
      <Layout>
        {state.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="container">
            <p className="location">Location: {state[0].location}</p>
            <p>
              Date: {`${state[0].day}${end} ${state[0].month} ${state[0].year}`}
            </p>
            <p>Description: {state[0].description}</p>
            <p>Remarks: {state[0].remarks}</p>
          </div>
        )}
      </Layout>

      <style jsx>{`
        p {
          margin: 30px 20px;
        }

        .location {
          font-size: 1.6rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default HostingSpecifics;
