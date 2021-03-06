import React, { useEffect, useState } from "react";
import Link from "next/link";

import Layout from "../../components/Layout";

const Forums = () => {
  const [forums, setForums] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/forums`)
      .then((res) => res.json())
      .then((data) => setForums(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Layout>
        <section>
          <main>
            {forums === undefined ? (
              <div>Loading...</div>
            ) : (
              forums.map((forum) => (
                <div key={forum.id} className="container">
                  <Link href={`/forums/${forum.uuid}`}>
                    <p className="title">{forum.title}</p>
                  </Link>
                  <div>
                    <p>by {forum.user}</p>
                    <p>{forum.date}</p>
                  </div>
                </div>
              ))
            )}
          </main>
          <aside>
            <Link href={"/forums/create"}>
              <button>Create Post</button>
            </Link>
          </aside>
        </section>
      </Layout>

      <style jsx>{`
        section {
          display: flex;
        }

        main {
          display: flex;
          flex-direction: column;
          width: 80%;
          margin-top: 30px;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          height: 90px;
          border: 1px solid lightgray;
          border-radius: 30px;
          margin: 10px 40px;
        }

        aside {
          margin: 40px;
          width: 20%;
          height: 90px;
          border: 1px solid lightgray;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button {
          width: 40%;
          height: 30%;
        }

        p {
          color: grey;
          margin: 0 50px;
        }

        .title {
          font-size: 1.4rem;
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Forums;
