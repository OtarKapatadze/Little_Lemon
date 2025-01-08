import { useState, useEffect, useRef } from "react";

export default function Reservation({ children, title = "Reservation page" }) {
  return (
    <>
      <section className="router-section router-reservation">
        <form>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" />
          <label htmlFor="res-time">Choose time</label>
          <input type="time" id="res-time" min="09:00" max="18:00" required />
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Friends</option>
          </select>
          <input className="button" type="submit" value="SUBMIT" />
        </form>
        {children}
      </section>
    </>
  );
}
