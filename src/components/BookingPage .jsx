import BookingForm from "./BookingForm";
import { useReducer, useState } from "react";

const initialTimeArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function timeReducer(timeState, action) {
  switch (action.type) {
    case "initialize_times":
      return [...initialTimeArray];
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

  return (
    <section className="router-section router-reservation">
      <h1>{title}</h1>
      <BookingForm
        formData={formData}
        setFormData={setFormData}
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
      {children}
    </section>
  );
}
