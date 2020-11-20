import React, { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../../components/Layout";
import { determineEnd, determineMonth } from "../../../Utils";

const HostingSpecifics = () => {
  const router = useRouter();
  const { id } = router.query;
  const [state, setState] = useState([]);

  fetch(`${process.env.NEXT_PUBLIC_HOST}/hostings`)
    .then((res) => res.json())
    .then((data) => {
      setState(data.filter((hosting) => hosting.uuid === id));
    })
    .catch((err) => console.log(err));

  return (
    <React.Fragment>
      <Layout>
        {state.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="container">
            <p className="location">Location: {state[0].location}</p>
            <p>
              Date:{" "}
              {`${state[0].date.slice(8, 10)}${determineEnd(
                state[0].date.charAt(9)
              )} ${determineMonth(
                state[0].date.slice(5, 7)
              )} ${state[0].date.slice(0, 4)}`}
            </p>
            <p>Time: {state[0].time}</p>
            <p>Duration: {state[0].duration}hrs</p>
            <p>Description: {state[0].description}</p>
            <p>
              Remarks:{" "}
              {state[0].remarks.length === 0 ? "No Remarks" : state[0].remarks}
            </p>
            <button className="subscribe">Subscribe to this event</button>
          </div>
        )}
      </Layout>

      <style jsx>{`
        .container {
          margin: 30px 20px;
        }

        .container p,
        .container .subscribe {
          margin-top: 20px;
        }

        p {
          font-size: 1rem;
        }

        .subscribe {
          background: greenyellow;
          border: 1px solid grey;
          border-radius: 4px;
          width: 150px;
          height: 50px;
          font-size: 1rem;
          transition: all ease-in 0.1s;
        }

        .subscribe:hover {
          background: yellow;
        }

        .location {
          font-size: 1.6rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default HostingSpecifics;
