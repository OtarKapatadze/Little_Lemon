export default function AvailableTimes({ availableTimes, time, handleChange }) {
  return (
    <>
      <label htmlFor="time" className="label">
        Choose time
      </label>
      <select
        id="time"
        onChange={handleChange}
        value={time}
        className="select select-time"
      >
        <option value="-----">-----</option>
        {availableTimes.length === 0 ? (
          <option value={"Sorry All Booked"}> Sorry All Booked </option>
        ) : (
          availableTimes.map((opt, inx) => {
            return (
              <option key={inx} value={opt}>
                {opt}
              </option>
            );
          })
        )}
      </select>
    </>
  );
}
