import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../../components/Layout";

const Post = () => {
  const router = useRouter();
  const { uuid } = router.query;
  const [forum, setForum] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/forums`)
      .then((res) => res.json())
      .then((data) => setForum(data.filter((forum) => forum.uuid === uuid)))
      .catch((err) => console.log(err));
  }, []);

  function styleBody(body) {
    if (body !== undefined) {
      body = body.replaceAll("|", "<br><br>");
      return body;
    }
  }

  return (
    <React.Fragment>
      <Layout>
        <main>
          {forum === undefined ? (
            <div>Loading...</div>
          ) : (
            <div className="container">
              <h1>{forum[0]?.title}</h1>
              <h5>by {forum[0]?.user}</h5>
              <p
                dangerouslySetInnerHTML={{ __html: styleBody(forum[0]?.body) }}
              />
              <h6>Publication Date: {forum[0]?.date}</h6>
            </div>
          )}
        </main>
      </Layout>

      <style jsx>{`
        .container {
          width: 60%;
          margin: 0 auto;
        }

        h1,
        h5,
        h6 {
          text-align: center;
          margin-top: 30px;
        }

        h5 {
          margin-top: 5px;
        }

        h6 {
          margin-top: 30px;
          margin-bottom: 30px;
        }

        p {
          margin-top: 20px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Post;
