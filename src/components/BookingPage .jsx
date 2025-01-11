import BookingForm from "./BookingForm";
import { useState } from "react";

export default function BookingPage({ title = "Reserve a Table", children }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Friends",
    email: "",
  });

  const [availableTimes, setAvailableTime] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <section className="router-section router-reservation">
      <h1>{title}</h1>
      <BookingForm
        setAvailableTime={setAvailableTime}
        availableTimes={availableTimes}
        formData={formData}
        setFormData={setFormData}
      />
      {children}
    </section>
  );
}
