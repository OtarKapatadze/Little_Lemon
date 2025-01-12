import BookingForm from "./BookingForm";
import { useReducer, useState } from "react";

const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function timeReducer(state, action) {
  switch (action.type) {
    case "time_change":
      return [...state].filter((time) => time !== action.time);
    case "update_times":
      // resseting time when changed date
      return initialTimes;
    default:
      return state;
  }
}

export default function BookingPage({ title = "Reserve a Table", children }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Friends",
    email: "",
  });

  const [times, dispatch] = useReducer(timeReducer, initialTimes);

  return (
    <section className="router-section router-reservation">
      <h1>{title}</h1>
      <BookingForm
        setAvailableTime={dispatch}
        availableTimes={times}
        formData={formData}
        setFormData={setFormData}
      />
      {children}
    </section>
  );
}
