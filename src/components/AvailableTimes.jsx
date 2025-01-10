import { useState } from "react";

export default function AvailableTimes() {
  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const [selectedTime, setSelectedTime] = useState("");

  return (
    <>
      <label htmlFor="res-time" className="label">
        Choose time
      </label>
      <select
        id="res-time"
        value={selectedTime}
        className="select select-time"
        onChange={(e) => setSelectedTime(e.target.value)}
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
