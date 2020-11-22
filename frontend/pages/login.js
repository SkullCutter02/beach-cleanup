import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

import Layout from "../components/Layout";

const Login = () => {
  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();

    let identifier = document.getElementById("identifier").value;
    let password = document.getElementById("password").value;

    await axios
      .post(`${process.env.NEXT_PUBLIC_HOST}/auth/local`, {
        identifier: identifier,
        password: password,
      })
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          localStorage.setItem("identifier", identifier);
          localStorage.setItem("password", password);
          router.push("/");
          router.reload();
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert("Invalid Credentials");
        }
      });
  };

  return (
    <React.Fragment>
      <Layout>
        <h1>Login</h1>
        <main>
          <form onSubmit={login}>
            <ul>
              <li className="text">
                <label htmlFor="email">Username/Email: </label>
                <label htmlFor="password">Password: </label>
              </li>
              <li className="inputs">
                <input required type="text" id="identifier" name="identifier" />
                <input required type="password" id="password" name="password" />
              </li>
            </ul>
            <Link href={"/signup"}>
              <a>Don't have an account? Click here</a>
            </Link>
            <button type={"submit"}>Log In</button>
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
          margin: 50px 47%;
          width: 100px;
          height: 30px;
        }

        a {
          margin: 0 45%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Login;
