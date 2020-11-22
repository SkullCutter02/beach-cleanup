import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import Layout from "../../components/Layout";
import { UserContext } from "../../context/UserContext";

const CreateForum = () => {
  const router = useRouter();
  const userData = useContext(UserContext).data;

  useEffect(() => {
    if (
      localStorage.getItem("identifier") === null ||
      localStorage.getItem("password") === null
    ) {
      router.push("/login");
    }
  }, []);

  const post = async (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;
    let uuid = uuidv4();

    await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_HOST}/forums`,
      data: {
        title: title,
        body: body,
        user: userData.user.username,
        date: new Date().toDateString(),
        uuid: uuid,
      },
      headers: {
        Authorization: `Bearer ${userData.jwt}`,
      },
    }).catch((err) => console.log(err));

    await router.push(`/forums/${uuid}`);
  };

  return (
    <React.Fragment>
      <Layout>
        <main>
          <h1>Create Post</h1>
          <form onSubmit={post}>
            <input
              required
              type="text"
              placeholder="Title"
              id="title"
              name="title"
            />
            <label htmlFor="body">
              Post Body (Pipeline character | to start a new paragraph)
            </label>
            <textarea
              required
              name="body"
              id="body"
              cols="64"
              rows="30"
              placeholder="Post Body"
            />
            <button type={"submit"}>Post</button>
          </form>
        </main>
      </Layout>

      <style jsx>{`
        h1 {
          text-align: center;
          margin-top: 15px;
        }

        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        input {
          display: block;
          height: 25px;
          width: 500px;
          margin-top: 30px;
        }

        label {
          margin-top: 30px;
        }

        textarea {
          margin-top: 5px;
        }

        button {
          margin-top: 30px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default CreateForum;
