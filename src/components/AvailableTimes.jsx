export default function AvailableTimes({
  availableTimes,
  formData,
  changeHandler,
}) {
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
