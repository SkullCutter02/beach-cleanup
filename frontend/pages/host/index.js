import React, { useContext, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import countries from "../../countries";
import Dropdown from "../../components/Dropdown";
import { UserContext } from "../../context/UserContext";

const Host = () => {
  const initialText = "Select Country";
  const data = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (data === null) {
      router.push("/signup");
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    let location = document.getElementById("location").value;
    let country = document.getElementById("btn-text").innerText;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let duration = document.getElementById("duration").value;
    let remarks = document.getElementById("remarks").value;
    let uuid = uuidv4();

    if (country !== initialText) {
      await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_HOST}/hostings`,
        data: {
          location: location,
          country: country,
          description: description,
          date: date,
          time: time,
          duration: duration,
          remarks: remarks,
          uuid: uuid,
          user: data.user.username,
        },
        headers: {
          Authorization: `Bearer ${data.jwt}`,
        },
      }).catch((err) => console.log(err));

      await router.push(`/results/${uuid}`);
    }
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
            />
            <label htmlFor="date">Date and Start Time of this cleanup</label>
            <div className="date-time">
              <input required type="date" id="date" name="date" />
              <input required type="time" id="time" name="time" />
            </div>
            <label htmlFor="duration">Duration of this cleanup (in hrs)</label>
            <input
              required
              type="number"
              step="0.1"
              id="duration"
              name="duration"
            />
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
          margin: 20px 0;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Host;
