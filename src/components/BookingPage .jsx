import BookingForm from "./BookingForm";
// import { useState, useEffect, useRef } from "react";
// import { Formik } from "formik";
// import { object, string, number, date, InferType } from "yup";

export default function BookingPage({ title = "Reserve a Table", children }) {
  return (
    <section className="router-section router-reservation">
      <h1>{title}</h1>
      <BookingForm />
      {children}
    </section>
  );
}
