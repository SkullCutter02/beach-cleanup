import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../components/Layout";
import { UserContext } from "../context/UserContext";
import { determineEnd, determineMonth } from "../Utils";

const MyHostings = () => {
  const data = useContext(UserContext);
  const router = useRouter();
  const [state, setState] = useState();

  useEffect(() => {
    if (data === null) {
      router.push("/signup");
    }
  }, []);

  useEffect(() => {
    if (data !== null) {
      fetch(`${process.env.NEXT_PUBLIC_HOST}/hostings`)
        .then((res) => res.json())
        .then((resData) =>
          setState(
            resData.filter((hosting) => hosting.user === data.user.username)
          )
        )
        .catch((err) => console.log(err));
    }
  }, [data]);
  console.log(state);

  return (
    <React.Fragment>
      <Layout>
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
      </Layout>
    </React.Fragment>
  );
};

export default MyHostings;
