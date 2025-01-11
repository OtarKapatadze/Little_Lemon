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

  return (
    <section className="router-section router-reservation">
      <h1>{title}</h1>
      <BookingForm formData={formData} setFormData={setFormData} />
      {children}
    </section>
  );
}
