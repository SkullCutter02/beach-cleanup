import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const userData = useContext(UserContext).data;
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.reload();
    router.push("/");
  };

  return (
    <React.Fragment>
      <nav>
        <ul className="nav-left">
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/host"}>
              <a>Host Your Own</a>
            </Link>
          </li>
          <li>
            <Link href={"/myhostings"}>
              <a>My Hostings</a>
            </Link>
          </li>
          <li>Forums</li>
          <li>
            <Link href={"/about"}>
              <a>About Us</a>
            </Link>
          </li>
        </ul>
        <ul className="nav-right">
          <li>
            {userData === null ? (
              <div>
                <Link href={"/signup"}>
                  <button type={"button"}>Sign Up</button>
                </Link>
                <Link href={"/login"}>
                  <button type={"button"}>Log In</button>
                </Link>
              </div>
            ) : (
              <div className="signed-in-right">
                <div className="username">{userData?.user?.username}</div>
                <button type={"button"} onClick={logout}>
                  Log Out
                </button>
              </div>
            )}
          </li>
        </ul>
      </nav>

      <style jsx>{`
        nav {
          height: 55px;
          background: #dabc97;
          display: flex;
          justify-content: space-between;
        }

        li {
          list-style: none;
          font-size: 1.4rem;
          cursor: pointer;
        }

        .nav-left {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 60%;
        }

        .nav-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        button {
          margin-right: 50px;
          background: aqua;
          width: 90px;
          height: 30px;
          border: 3px solid aqua;
          border-radius: 4px;
          cursor: pointer;
        }

        a {
          color: black;
          text-decoration: none;
        }

        .username {
          margin-right: 25px;
        }

        .signed-in-right {
          display: flex;
          align-items: center;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
