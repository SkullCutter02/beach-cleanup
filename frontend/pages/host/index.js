import React from "react";

import Layout from "../../components/Layout";
import countries from "../../countries";
import Dropdown from "../../components/Dropdown";

const Host = () => {
  const initialText = "Select Country";

  const submit = async (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <React.Fragment>
      <Layout>
        <main>
          <h1>Host your own Beach Cleanup</h1>
          <form onSubmit={submit}>
            <label htmlFor="location">
              Location of your cleanup (Example: Stanley Beach, Hong Kong)
            </label>
            <input required type="text" id="location" name="location" />
            <label htmlFor="country">Choose the country of this cleanup</label>
            <Dropdown array={countries} text={initialText} />
            <label htmlFor="description">
              Give a description of this cleanup
            </label>
            <textarea
              required
              name="description"
              id="description"
              cols="50"
              rows="10"
            />
            <label htmlFor="date">Date and Time of this cleanup</label>
            <div className="date-time">
              <input required type="date" id="date" name="date" />
              <input required type="time" id="time" name="time" />
            </div>
            <label htmlFor="remarks">Any remarks?</label>
            <textarea name="remarks" id="remarks" cols="50" rows="7" />
            <button type="submit">Host</button>
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

        label {
          display: block;
          margin-top: 10px;
        }

        input {
          display: block;
          height: 25px;
          width: 160px;
          margin-top: 10px;
        }

        textarea {
          margin-top: 10px;
        }

        .date-time {
          display: flex;
        }

        #date,
        #time {
          width: 120px;
          margin: 10px 20px;
        }

        button {
          margin-top: 20px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Host;
