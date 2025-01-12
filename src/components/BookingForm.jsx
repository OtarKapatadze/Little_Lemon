import { useEffect, useState } from "react";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"; // Add Yup for validation

export default function BookingForm({
  formData,
  setFormData,
  dispatch,
  availableTimes,
}) {
  const [resetTimes, setResetTimes] = useState(availableTimes);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // useEffect for resetTimes
  useEffect(() => {
    const today = new Date();
    const todaysAvailability = fetchAPI(today);
    setResetTimes(todaysAvailability);
  }, []);

  // useEffect for submission
  useEffect(() => {
    if (isSubmitted) {
      const submited = submitAPI(formData);
      if (submited) {
        navigate("/ConfirmedBooking");
      }
    }

    setIsSubmitted(false);
  }, [isSubmitted]);

  // Validation schema using Yup

  const validationSchema = Yup.object({
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"), // Add validation for time
    guests: Yup.number()
      .min(1, "Guests must be at least 1")
      .max(10, "Guests cannot exceed 10")
      .required("Guests are required"),
    occasion: Yup.string().required("Please select an occasion"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  // handleSubmit
  const handleSubmit = (values) => {
    // Submit form data and dispatch to change state
    dispatch({ type: "available_times", payload: values.time });

    // Optionally reset the form data
    setFormData({
      date: "",
      time: "",
      guests: "",
      occasion: "",
      email: "",
    });

    setIsSubmitted(true);
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <Form>
          <label htmlFor="date" className="label">
            Choose date
          </label>
          <Field
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            type="date"
            id="date"
            name="date"
          />
          {touched.date && errors.date && (
            <div className="error">{errors.date}</div>
          )}

          <label htmlFor="time" className="label">
            Choose time
          </label>
          <Field
            as="select"
            value={values.time}
            onChange={handleChange}
            onBlur={handleBlur}
            name="time"
            id="time"
            className="select"
          >
            <option value="">Select Time</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </Field>
          {touched.time && errors.time && (
            <div className="error">{errors.time}</div>
          )}

          <label htmlFor="guests" className="label">
            Number of guests
          </label>
          <Field
            value={values.guests}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
          />
          {touched.guests && errors.guests && (
            <div className="error">{errors.guests}</div>
          )}

          <label htmlFor="occasion" className="label">
            Occasion
          </label>
          <Field
            as="select"
            name="occasion"
            id="occasion"
            className="select select-occasion"
          >
            <option className="option" value="What Occasion">
              What Occasion ?
            </option>
            <option className="option" value="Birthday">
              Birthday
            </option>
            <option className="option" value="Anniversary">
              Anniversary
            </option>
            <option className="option" value="Friends">
              Friends
            </option>
          </Field>
          {touched.occasion && errors.occasion && (
            <div className="error">{errors.occasion}</div>
          )}

          <label htmlFor="email" className="label">
            Email
          </label>
          <Field
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            placeholder="....@mail.com"
            id="email"
            name="email"
          />
          {touched.email && errors.email && (
            <div className="error">{errors.email}</div>
          )}

          <input className="button" type="submit" value="SUBMIT" />
        </Form>
      )}
    </Formik>
  );
}
