import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";

import Layout from "../components/Layout";
import { UserContext } from "../context/UserContext";
import { determineEnd, determineMonth } from "../Utils";

const MyHostings = () => {
  const userData = useContext(UserContext);
  const router = useRouter();
  const [state, setState] = useState();

  useEffect(() => {
    if (userData === null) {
      router.push("/signup");
    }
  }, []);

  useEffect(() => {
    if (userData !== null) {
      fetch(`${process.env.NEXT_PUBLIC_HOST}/hostings`)
        .then((res) => res.json())
        .then((data) =>
          setState(
            data.filter((hosting) => hosting.user === userData.user.username)
          )
        )
        .catch((err) => console.log(err));
    }
  }, [userData]);

  return (
    <React.Fragment>
      <Head>
        <script
          src="https://kit.fontawesome.com/a40d908160.js"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout>
        {state === undefined ? (
          <div>Loading...</div>
        ) : (
          state.map((hosting) => (
            <div className="container" key={hosting.id}>
              <Link href={`/results/${hosting.uuid}`}>
                <p className="location">Location: {hosting.location}</p>
              </Link>
              <Link href={`/host/${hosting.uuid}/edit/${uuidv4()}`}>
                <i className="far fa-edit" />
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
          position: relative;
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

        i {
          position: absolute;
          left: 70%;
          color: grey;
          cursor: pointer;
        }

        i:hover {
          color: black;
        }
      `}</style>
    </React.Fragment>
  );
};

export default MyHostings;
