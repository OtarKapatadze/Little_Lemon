import AvailableTimes from "./AvailableTimes";
import { useEffect, useState } from "react";
import { fetchAPI, submitAPI } from "../api";

export default function BookingForm({
  formData,
  setFormData,
  dispatch,
  availableTimes,
}) {
  const [resetTimes, setResetTimes] = useState(availableTimes);

  useEffect(() => {
    const today = new Date();
    const todaysAvailability = fetchAPI(today);
    setResetTimes(todaysAvailability);
  }, []);

  // handleChange updated formData changes
  function handleChange(e) {
    const { id, value } = e.target;
    if (id === "date") {
      dispatch({ type: "initialize_times", payload: resetTimes });
      setFormData((prev) => ({ ...prev, [id]: value }));
    } else {
      setFormData((prevData) => {
        return {
          ...prevData,
          [id]: value,
        };
      });
    }
  }

  // Submit Handler

  // i need to make submit so that once submitted in reducer changes initial value
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    dispatch({ type: "available_times", payload: formData.time });
    // Optionally reset the form data

    setFormData({
      date: "",
      time: "",
      guests: "",
      occasion: "",
      email: "",
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date" className="label">
          Choose date
        </label>
        <input
          value={formData.date}
          onChange={handleChange}
          type="date"
          id="date"
        />
        <AvailableTimes
          time={formData.time}
          handleChange={handleChange}
          availableTimes={availableTimes}
        />
        <label htmlFor="guests" className="label">
          Number of guests
        </label>
        <input
          value={formData.guests}
          onChange={handleChange}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion" className="label">
          Occasion
        </label>
        <select
          value={formData.occasion}
          onChange={handleChange}
          id="occasion"
          className="select select-occasion"
        >
          <option className="option" value="What Occasion">
            What Occasion ?
          </option>
          <option className="option" value={"Birthday"}>
            Birthday
          </option>
          <option className="option" value={"Anniversary"}>
            Anniversary
          </option>
          <option className="option" value={"Friends"}>
            Friends
          </option>
        </select>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="....@mail.com"
          id="email"
        />
        <input className="button" type="submit" value="SUBMIT" />
      </form>
    </>
  );
}
