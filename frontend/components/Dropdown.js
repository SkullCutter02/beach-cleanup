import React from "react";

const Dropdown = ({ array, text }) => {
  function changeText(e) {
    let text = e.target.textContent;
    let button = document.getElementById("btn-text");
    button.innerText = text;
  }

  return (
    <React.Fragment>
      <section className="dropdown">
        <button className="dropdown-btn">
          <span id="btn-text">{text}</span>
          <i className="fas fa-caret-down" />
        </button>
        <div className="dropdown-content">
          {array.map((item) => {
            return <p onClick={changeText}>{item}</p>;
          })}
        </div>
      </section>

      <style jsx>{`
        button {
          margin-top: 10px;
          min-width: 100px;
          height: 25px;
          border: 1px solid grey;
          border-radius: 4px;
          cursor: pointer;
        }

        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-btn {
          min-width: 160px;
          min-height: 30px;
          background: #f9f9f9;
          border: 1px solid black;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background: #f9f9f9;
          min-width: 160px;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          padding: 12px 16px;
          z-index: 1;
          max-height: 200px;
          overflow: scroll;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        p {
          cursor: pointer;
        }

        i {
          margin-left: 10px;
          position: absolute;
          top: 48%;
          left: 80%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Dropdown;
