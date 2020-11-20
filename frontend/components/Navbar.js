import React, { useContext } from "react";
import Link from "next/link";

import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const data = useContext(UserContext);

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
            <Link href={data === null ? "/signup" : "/host"}>
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
            {data === null ? (
              <div>
                <button type={"button"}>Sign Up</button>
                <button type={"button"}>Log In</button>
              </div>
            ) : (
              <div className="username">{data.user.username}</div>
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
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
