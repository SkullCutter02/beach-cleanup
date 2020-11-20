import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../../components/Layout";
import { CountryContext } from "../../context/CountryContext";
import { determineEnd, determineMonth } from "../../Utils";

const Results = () => {
  const router = useRouter();
  const country = useContext(CountryContext);
  const [state, setState] = useState(undefined);

  fetch(`${process.env.NEXT_PUBLIC_HOST}/hostings`)
    .then((res) => res.json())
    .then((data) =>
      setState(
        data.filter(
          (hosting) =>
            hosting.country.toLowerCase() === country.country.toLowerCase()
        )
      )
    )
    .catch((err) => console.log(err));

  useEffect(() => {
    if (state !== undefined) {
      if (state.length === 0) {
        alert(`No beach cleanups found for ${country.country}`);
        router.push("/");
      }
    }
  }, [state]);

  return (
    <React.Fragment>
      <Layout>
        <main>
          {state === undefined ? (
            <div>Loading...</div>
          ) : (
            state.map((hosting) => (
              <div className="container">
                <Link href={`/results/${hosting.uuid}`}>
                  <p className="location">Location: {hosting.location}</p>
                </Link>
                <p className="date">
                  Date:{" "}
                  {`${hosting.date.slice(8, 10)}${determineEnd(
                    hosting.date.charAt(9)
                  )} ${determineMonth(
                    hosting.date.slice(5, 7)
                  )} ${hosting.date.slice(0, 4)}`}
                </p>
              </div>
            ))
          )}
        </main>
      </Layout>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          height: 90px;
          border: 1px solid lightgray;
          border-radius: 30px;
          margin: 40px auto;
        }

        p {
          color: grey;
          margin: 0 50px;
        }

        .location {
          font-size: 1.4rem;
          cursor: pointer;
        }

        .date {
          font-size: 1.1rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Results;
