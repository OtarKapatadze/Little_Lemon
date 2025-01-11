import { useState } from "react";

export default function AvailableTimes({ formData, changeHandler }) {
  const [availableTimes, setAvailableTime] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <>
      <label htmlFor="time" className="label">
        Choose time
      </label>
      <select
        id="time"
        value={formData.time}
        className="select select-time"
        onChange={changeHandler}
      >
        {availableTimes.map((opt, inx) => {
          return (
            <option key={inx} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </>
  );
}
