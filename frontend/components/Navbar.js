import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav>
        <ul className="nav-left">
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>Host Your Own</li>
          <li>My Hostings</li>
          <li>
            <Link href={"/about"}>
              <a>About Us</a>
            </Link>
          </li>
        </ul>
        <ul className="nav-right">
          <li>
            <button type={"button"}>Sign Up</button>
            <button type={"button"}>Log In</button>
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
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
