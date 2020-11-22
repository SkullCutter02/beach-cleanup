import React, { useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import { UserContext } from "../../context/UserContext";

const SignUp = () => {
  const setData = useContext(UserContext).setData;
  const router = useRouter();

  const signUp = (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    axios
      .post(`${process.env.NEXT_PUBLIC_HOST}/auth/local/register`, {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        setData(res.data, password);
        router.push("/");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert("Account already exist!");
        }
      });
  };

  return (
    <React.Fragment>
      <Layout>
        <h1>Sign Up</h1>
        <main>
          <form onSubmit={signUp}>
            <ul>
              <li className="text">
                <label htmlFor="username">Username: </label>
                <label htmlFor="email">Email: </label>
                <label htmlFor="password">Password: </label>
              </li>
              <li className="inputs">
                <input required type="text" id="username" name="username" />
                <input required type="email" id="email" name="email" />
                <input required type="password" id="password" name="password" />
              </li>
            </ul>
            <button type={"submit"}>Sign Up</button>
          </form>
        </main>
      </Layout>

      <style jsx>{`
        main {
          width: 100%;
        }

        h1 {
          text-align: center;
          margin-top: 100px;
        }

        ul {
          list-style: none;
          display: flex;
          justify-content: center;
          margin-top: 2em;
        }

        li {
          width: 50%;
          height: 200px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          margin-right: 4em;
        }

        .inputs {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        input {
          width: 30%;
        }

        label,
        input {
          margin: 5px 0;
        }

        button {
          margin: -30px 47%;
          width: 100px;
          height: 30px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default SignUp;
