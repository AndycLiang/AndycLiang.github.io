// pages/Attendance.js

import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./pages.css";

const Attendance = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const actualDay = new Date();
    actualDay.setDate(actualDay.getDate() + 1);
    actualDay.setHours(actualDay.getHours() - 2);

    if (
      actualDay.getDay() !== 0 &&
      (actualDay.getHours() < 14 || actualDay.getHours() > 16)
    ) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    } else {
      // alert(`${firstName} ${lastName} ${computingID}`);
      // console.log(`${firstName} ${lastName} ${computingID}`);
      try {
        const response = await Axios.post("http://127.0.0.1:8000/api/log/", {
          firstName,
          lastName,
          computingID,
        });

        setSubmitted(true);

        console.log("Data submitted successfully:", response.data);
        // alert(`Submission successful: ${response.data}`);

        setTimeout(() => setSubmitted(false), 3000);
      } catch (error) {
        console.error("There was an error submitting the data:", error);
        alert("Error submitting data. Please try again.");
      }
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [computingID, setComputingID] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setError] = useState(false);

  const today = new Date();
  while (today.getDay() !== 0) {
    today.setDate(today.getDate() - 1);
  }
  // console.log(today);
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();

  return (
    <div className="pageBodyBed">
      <div className="pageBodyContainer">
        <h1 className="pageHeader">
          Attendance Form: {month}/{day}/{year}
        </h1>
        <p className="pageBody">
          We are lucky to be sponsored by a bridge enthusiast, who rewards
          regular members with $15 per meeting for attendance! Fill out the form
          below at the beginning of each meetings TEST TEST TEST
        </p>

        {submitted ? (
          <div className="notification">Form submitted successfully!</div>
        ) : (
          <div></div>
        )}
        {submissionError ? (
          <div className="errorNotification">
            Error: Currently not accepting submissions
          </div>
        ) : (
          <div></div>
        )}
        {submitted || submissionError ? ( //This statement is for spacing and aesthetic purposes
          <div></div>
        ) : (
          <div className="emptyBox"></div>
        )}

        <form onSubmit={handleSubmit} className="attendenceForm">
          <div className="formGroup">
            <label className="formLabel">
              First Name:
              <input
                type="text"
                className="formInput"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="formGroup">
            <label className="formLabel">
              Last Name:
              <input
                type="text"
                className="formInput"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="formGroup">
            <label className="formLabel">
              Computing ID:
              <input
                type="text"
                className="formInput"
                value={computingID}
                onChange={(e) => setComputingID(e.target.value)}
                required
              />
            </label>
          </div>
          <input type="submit" className="formSubmit" />
        </form>
      </div>
    </div>
  );
};

export default Attendance;
