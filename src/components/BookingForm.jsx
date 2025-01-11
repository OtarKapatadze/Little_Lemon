import { data } from "react-router-dom";
import AvailableTimes from "./AvailableTimes";

export default function BookingForm({ formData, setFormData, children }) {
  // event handler for state
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <>
      {children}
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
        <AvailableTimes formData={formData} changeHandler={handleChange} />
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
