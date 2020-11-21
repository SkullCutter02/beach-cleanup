import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../../../../components/Layout";
import Dropdown from "../../../../../components/Dropdown";
import countries from "../../../../../countries";

const EditHosting = () => {
  const router = useRouter();
  const { hostuuid } = router.query;
  const [state, setState] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/hostings`)
      .then((res) => res.json())
      .then((data) =>
        setState(data.filter((hosting) => hosting.uuid === hostuuid))
      )
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Layout>
        <main>
          <h1>Edit</h1>
          <form onSubmit={submit}>
            <label htmlFor="location">
              Location of your cleanup (Example: Stanley Beach, Hong Kong)
            </label>
            <input
              required
              type="text"
              id="location"
              name="location"
              value={state[0]?.location}
            />
            <label htmlFor="country">Choose the country of this cleanup</label>
            <Dropdown array={countries} text={state[0]?.country} />
            <label htmlFor="description">
              Give a description of this cleanup (provide information, what to
              bring etc.)
            </label>
            <textarea
              required
              name="description"
              id="description"
              cols="50"
              rows="10"
              minLength="150"
              value={state[0]?.description}
            />
            <label htmlFor="date">Date and Start Time of this cleanup</label>
            <div className="date-time">
              <input
                required
                type="date"
                id="date"
                name="date"
                value={state[0]?.date}
              />
              <input
                required
                type="time"
                id="time"
                name="time"
                value={state[0]?.time}
              />
            </div>
            <label htmlFor="duration">Duration of this cleanup (in hrs)</label>
            <input
              required
              type="number"
              step="0.1"
              id="duration"
              name="duration"
              value={state[0]?.duration}
            />
            <label htmlFor="remarks">Any remarks?</label>
            <textarea
              name="remarks"
              id="remarks"
              cols="50"
              rows="7"
              value={state[0]?.remarks}
            />
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
          margin: 20px 0;
        }
      `}</style>
    </React.Fragment>
  );
};

export default EditHosting;
