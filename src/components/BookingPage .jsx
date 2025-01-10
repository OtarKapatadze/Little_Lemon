import BookingForm from "./BookingForm";
import { useState } from "react";
// import { Formik } from "formik";
// import { object, string, number, date, InferType } from "yup";

export default function BookingPage({ title = "Reserve a Table", children }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
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
