import BookingForm from "./BookingForm";
import { useReducer, useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "../api";

const initialTimeArray = [];

function timeReducer(timeState, action) {
  switch (action.type) {
    case "initialize_times":
      return action.payload;
    case "available_times":
      return timeState.filter((time) => time !== action.payload);
    default:
      throw new Error("Reducer not working");
  }
}

const initialFormState = {
  date: "",
  time: "",
  guests: "1",
  occasion: "",
  email: "",
};

export default function BookingPage({ title = "Reserve a Table", children }) {
  //state for form
  const [formData, setFormData] = useState(initialFormState);

  // useReducer state
  const [availableTimes, dispatch] = useReducer(timeReducer, initialTimeArray);

  // function to call API

  useEffect(() => {
    const today = new Date();
    const todaysAvailability = fetchAPI(today);
    dispatch({ type: "initialize_times", payload: todaysAvailability });
  }, []);

  return (
    <section className="router-section router-reservation">
      <h1>{title}</h1>
      <BookingForm
        formData={formData}
        setFormData={setFormData}
        availableTimes={availableTimes}
        dispatch={dispatch}
        // newDated={todayDates}
      />
      {children}
    </section>
  );
}
